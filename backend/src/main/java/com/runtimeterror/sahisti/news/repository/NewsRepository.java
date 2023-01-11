package com.runtimeterror.sahisti.news.repository;

import com.runtimeterror.sahisti.news.entity.News;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface NewsRepository extends JpaRepository<News, Long> {
    List<News> findAllByColumnIdAndVisibleOrderByDateDesc(Long id, Boolean visible);
    List<News> findAllByVisibleOrderByDateDesc(Boolean visible);
}