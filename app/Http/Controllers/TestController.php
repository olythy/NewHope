<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Articles;
use App\Tags;

class TestController extends Controller
{
 
 public function index(){


    return $this->embeddedDocumentUpdater('App\Articles', 'category', 'name', 'magnam', ['name' => 'Learning', 'slug' => 'learning']);

 	 
 }

}

