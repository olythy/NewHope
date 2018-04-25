<?php

namespace App\Console\Commands;

use App\Articles;
use App\NewsCategories;
use App\Tags;
use App\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class ImportArticles extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'articles:import';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Import new from WP';

    protected $article;

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
        $this->info('Start import ...');

        $articlesSample = [
            'title' => 'Title1',
            'slug' => 'slug1',
            'excerpt' => 'excerpt1',
            'content' => 'content1',
            'featured_img' => 'featured_img1',
            'created_at' => new \DateTime(),
            'updated_at' => new \DateTime()
        ];
        $tagsSample = [
            [
                'name' => 'tag_name1',
                'description' => 'tag_description_1'
            ],
            [
                'name' => 'tag_name2',
                'description' => 'tag_description2'
            ]
        ];
        $categorySample = [
            'name' => 'category_name1',
            'slug' => 'category_slug1',
            'description' => 'category_description1'
        ];
        $authorSample = [
            'name' => 'authour_name1',
            'email' => 'author_name1@example.com'
            // 'password' => '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', // secret
            // 'remember_token' => str_random(10),
            // 'user_level' => 5
        ];

        $article = DB::collection('articles')->where('slug', $articlesSample['slug'])->first();
        if (!$article) {
            $this->createArticles($articlesSample)
                ->addTags($tagsSample)
                ->addCategory($categorySample)
                ->addAuthor($authorSample);
        }


        $this->info('Finish!');
    }

    protected function createArticles($data)
    {
        $this->article = Articles::create($data);

        return $this;
    }

    protected function addTags($data)
    {
        foreach ($data as $tag) {
            $this->article->tags()->create($tag);
        }

        return $this;
    }

    protected function addCategory($data)
    {
        $this->article->category()->create($data);

        return $this;
    }

    protected function addAuthor($data)
    {
        $this->article->author()->create($data);

        return $this;
    }
}
