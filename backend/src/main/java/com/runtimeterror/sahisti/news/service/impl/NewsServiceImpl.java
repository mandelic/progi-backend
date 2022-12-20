package com.runtimeterror.sahisti.news.service.impl;

import com.runtimeterror.sahisti.configuration.exception.EntityIdNotFoundException;
import com.runtimeterror.sahisti.news.entity.News;
import com.runtimeterror.sahisti.news.repository.NewsRepository;
import com.runtimeterror.sahisti.news.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NewsServiceImpl implements NewsService {

    @Autowired
    private NewsRepository newsRepository;

    @Override
    public List<News> findAll() {
        return newsRepository.findAll();
    }

    @Override
    public News findById(Long id) {
        return newsRepository.findById(id).orElseThrow(() -> new EntityIdNotFoundException("News", id));
    }

    @Override
    public News addNews(News news) {
        return newsRepository.save(news);
    }
}
