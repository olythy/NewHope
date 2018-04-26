<?php

/**
 * @copyright  Copyright (c) 2018 OlyThy <olythy@gmail.com>
 * @license    http://opensource.org/licenses/mit-license.php  The MIT License
 */

namespace App\Console;

use App\Articles;
use App\NewsCategories;
use App\Tags;
use App\User;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

class WordpressApi
{
    public function setUrl($url)
    {
        $this->url = $url;
        return $this;
    }

    public function importPosts($page = 1)
    {

        if (0) {
            // get all posts (first time only!)
            // wget -S --user-agent="Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2)" http://unleashgroup.io/news/wp-json/wp/v2/posts
            // details in http header:
            // X-WP-Total: 754
            // X-WP-TotalPages: 76
            for ($i=0; $i<76; $i++) {
                $page=$i+1;
                $posts = collect($this->getJson($this->url . 'posts/?_embed&filter[orderby]=date&order=asc&page=' . $page));
                //$posts = collect($this->getJson($this->url . 'posts/?_embed&filter[orderby]=modified&page=' . $page));
                foreach ($posts as $post) {
                    $this->info = sprintf (WHITE."Date:".NORMAL." %-20s ".WHITE."Mod:".NORMAL." %-20s ".WHITE."id:".NORMAL."%4u ".WHITE."slug:".NORMAL." %-70s ".WHITE."title:".NORMAL." %s\n",
                        $post->date, $post->modified, $post->id, $post->slug, $post->title->rendered);
                    $this->syncArticle($post);
                }
            }
        } else {
            // get page of latest articles ordered by modified descending
            $posts = collect($this->getJson($this->url . 'posts/?_embed&filter[orderby]=modified&order=desc&page=' . $page));
            foreach ($posts as $post) {
                $this->syncArticle($post);
            }
        }
    }

    protected function syncArticle($data)
    {
        $found = DB::collection('articles')->where('wp_id', $data->id)->first();

        if (!$found) {
            // redirect output to logfile /var/log/unleashimport.log in /etc/crontab
            $this->info = sprintf ("Date: %-20s Mod: %-20s id:%4u slug: %-70s title: %s\n",
                        $data->date, $data->modified, $data->id, $data->slug, $data->title->rendered);
            return $this->createArticle($data);
        }

        // todo update
        // $found = Articles::find($found['_id']);

        // if ($found and $found->updated_at->format("Y-m-d H:i:s") < $this->carbonDate($data->modified)->format("Y-m-d H:i:s")) {
        //     return $this->updatePost($found, $data);
        // }
    }

    protected function getJson($url)
    {
        $response = file_get_contents($url, false);
        return json_decode($response);
    }

    protected function createArticle($data)
    {
        $article = new Articles();
        $article->id = $data->id;
        $article->wp_id = $data->id;
        $article->title = $data->title->rendered;
        $article->slug = $data->slug;
        $article->featured_image = $this->featuredImage($data->_embedded);
        $article->featured = ($data->sticky) ? 1 : null;
        $article->excerpt = $data->excerpt->rendered;
        $article->content = $data->content->rendered;
        $article->format = $data->format;
        $article->status = 'publish';
        $article->publishes_at = $this->carbonDate($data->date);
        $article->created_at = $this->carbonDate($data->date);
        $article->updated_at = $this->carbonDate($data->modified);

        try {
            $article->save();
        } catch (\Exception $e) {
            // echo $e->getTraceAsString();
        }


        $this->syncAuthor($article, $data->_embedded->author);
        $this->syncCategory($article, $data->_embedded->{"wp:term"});
        $this->syncTags($article, $data->_embedded->{"wp:term"});

        // exit;
    }

    protected function carbonDate($date)
    {
        return Carbon::parse($date);
    }

    protected function featuredImage($data)
    {
        if (property_exists($data, "wp:featuredmedia")) {
            $data = head($data->{"wp:featuredmedia"});
            if (isset($data->source_url)) {
                return $data->source_url;
            }
        }
        return null;
    }

    protected function syncAuthor($article, $data)
    {
        $data = collect($data)->first();
        $article->author()->create([
            'name' => $data->name,
            'email' => ''
        ]);
    }

    protected function syncCategory($article, $data)
    {
        $data = collect($data)->collapse()->where('taxonomy', 'category')->first();
        $article->category()->create([
            'wp_id' => $data->id,
            'name' => $data->name,
            'slug' => $data->slug
        ]);
    }

    protected function syncTags($article, $data)
    {
        $data = collect($data)->collapse()->where('taxonomy', 'post_tag')->pluck('name')->toArray();
        foreach ($data as $tagName) {
            $article->tags()->create(['name' => $tagName]);
        }
    }
}
