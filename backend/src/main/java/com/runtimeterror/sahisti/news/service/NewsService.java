package com.runtimeterror.sahisti.news.service;

import com.runtimeterror.sahisti.column.entity.Column;
import com.runtimeterror.sahisti.news.entity.News;

import java.util.List;

public interface NewsService {

    List<News> findAll();
    News findById(Long id);
    News addNews(News news);

}