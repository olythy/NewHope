<?php

namespace App\Console\Commands;

use App\Console\WordpressApi;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class ImportArticles extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'articles:import {url?}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Import new from WP';

    protected $api;

    protected $url = 'http://unleashgroup.io/news/wp-json/wp/v2/';

    protected $article;

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct(WordpressApi $api)
    {
        parent::__construct();

        $this->api = $api;
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
//        $this->info('Start import ...');

        $this->api->setUrl($this->url)
            ->importPosts();

//        $this->info('Finish!');
    }
}
