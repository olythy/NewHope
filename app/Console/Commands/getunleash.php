<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

// define colours for cli list.
define ("NORMAL",     "\033[00m");
define ("BLACK",      "\033[0;30m");
define ("RED",        "\033[0;31m");
define ("GREEN",      "\033[0;32m");
define ("BROWN",      "\033[0;33m");
define ("BLUE",       "\033[0;34m");
define ("PURPLE",     "\033[0;35m");
define ("CYAN",       "\033[0;36m");
define ("LIGHTGRAY",  "\033[0;37m");
define ("DARKGRAY",   "\033[1;30m");
define ("LIGHTRED",   "\033[1;31m");
define ("LIGHTGREEN", "\033[1;32m");
define ("YELLOW",     "\033[1;33m");
define ("LIGHTBLUE",  "\033[1;34m");
define ("LIGHTPURPLE","\033[1;35m");
define ("LIGHTCYAN",  "\033[1;36m");
define ("WHITE",      "\033[1;37m");

class getunleash extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    //protected $signature = 'command:name';
	protected $signature = 'getunleash';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'WP import';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        //
		//$x = new Wpapi;
		for ($i=1; $i<=5; $i++) {   // grab 5 pages - change to large number to get all for first import, try 1 post first.
			$this->importPosts($i); // page number only gives 10 posts at once.
		}

    }

	protected $url = 'http://unleashgroup.io/news/wp-json/wp/v2/';
	protected $test = 1;

	public function importPosts($page = 1) {
		//$posts = collect($this->getJson($this->url . 'posts/?_embed&filter[orderby]=modified&order=desc&page=' . $page));
		$posts = collect($this->getJson($this->url . 'posts/?_embed&filter[orderby]=modified&order=desc&page=' . $page));
																	//filter[orderby]=date&order=desc
		foreach ($posts as $post) {
			// now have each post object in $post - show some properties:
			printf (WHITE."Date:".NORMAL." %-20s ".WHITE."Mod:".NORMAL." %-20s ".WHITE."id:".NORMAL."%4u ".WHITE."slug:".NORMAL." %-70s ".WHITE."title:".NORMAL." %s\n", $post->date, LIGHTGREEN.$post->modified.NORMAL, $post->id, $post->slug, $post->title->rendered);
			// send to sync
			if (!$this->test) {
				$this->syncPost($post);
			}
		}
	}

	protected function getJson($url) {
		$response = file_get_contents($url, false);
		//return ( $response );
		return json_decode( $response );
	}

	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	protected function syncPost($data) {

		// printf ("test: %s\n", $this->test);

		// find first article - need Article class and wp_id property...
		$found = Articles::where('wp_id', $data->id)->first();  // was Post::where

		if (! $found) {
			printf ("inserting post %u ...\n", $data->id);
//			return $this->createPost($data);
		}

		if ($found and $found->updated_at->format("Y-m-d H:i:s") < $this->carbonDate($data->modified)->format("Y-m-d H:i:s")) {
			printf ("updating post %u ...\n", $data->id);
//			return $this->updatePost($found, $data);
		}
	}

	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	protected function carbonDate($date) {
		return Carbon::parse($date);
	}

	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	protected function createPost($data) {
		// News page in laravel site needs these properties:

		$post = new Post();
		$post->id             = $data->id;
		$post->wp_id          = $data->id;
		$post->user_id        = $this->getAuthor($data->_embedded->author);
		$post->title          = $data->title->rendered;
		$post->slug           = $data->slug;
		$post->featured_image = $this->featuredImage($data->_embedded);
		$post->featured       = ($data->sticky) ? 1 : null;
		$post->excerpt        = $data->excerpt->rendered;
		$post->content        = $data->content->rendered;
		$post->format         = $data->format;
		$post->status         = 'publish';
		$post->publishes_at   = $this->carbonDate($data->date);
		$post->created_at     = $this->carbonDate($data->date);
		$post->updated_at     = $this->carbonDate($data->modified);
		$post->category_id    = $this->getCategory($data->_embedded->{"wp:term"});
//		$post->save();
//		$this->syncTags($post, $data->_embedded->{"wp:term"});
//		return $post;
	}

	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	public function featuredImage($data) {
		// get url of featured image if it has one
		if (property_exists($data, "wp:featuredmedia")) {
			$data = head($data->{"wp:featuredmedia"});
			if (isset($data->source_url)) {
				return $data->source_url;
			}
		}
		return null;
	}

	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	public function getCategory($data) {
		// get category of post item, Need laravel Category object
		$category = collect($data)->collapse()->where('taxonomy', 'category')->first();
		$found = Category::where('wp_id', $category->id)->first();
		if ($found) {
			printf ("Found category id %u\n", $found->id);
			return $found->id;
		}

		printf ("New category id %u : %s %s\n", $category->id, $category->name, $category->slug);
		$cat = new Category();
		$cat->id = $category->id;
		$cat->wp_id = $category->id;
		$cat->name = $category->name;
		$cat->slug = $category->slug;
		$cat->description = '';
//		$cat->save();
//		return $cat->id;
	}

	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	private function syncTags(Post $post, $tags) {
		// get tags. setTags is a WP function https://codex.wordpress.org/Function_Reference/wp_set_post_tags
		// need laravel equivalent.
		$tags = collect($tags)->collapse()->where('taxonomy', 'post_tag')->pluck('name')->toArray();
		print "tags:\n";
		print_r($tags);
//		if (count($tags) > 0) {
//			$post->setTags($tags);
//		}
	}

}

