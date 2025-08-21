<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index(){
       return view('home');
    }
    public function ai_services(){
       return view('ai-services');
    }
    public function about(){
       return view('about');
    }
}
