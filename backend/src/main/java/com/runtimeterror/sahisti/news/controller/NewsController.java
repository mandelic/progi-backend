package com.runtimeterror.sahisti.news.controller;

import com.runtimeterror.sahisti.news.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/v1/news")
@RestController
@CrossOrigin(origins = "*")
public class NewsController {

    @Autowired
    private NewsService newsService;
}
