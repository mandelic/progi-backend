package com.runtimeterror.sahisti.news.service.impl;

import com.runtimeterror.sahisti.news.repository.NewsRepository;
import com.runtimeterror.sahisti.news.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NewsServiceImpl implements NewsService {

    @Autowired
    private NewsRepository newsRepository;
}
