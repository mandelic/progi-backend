package com.runtimeterror.sahisti.news.repository;

import com.runtimeterror.sahisti.news.entity.News;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NewsRepository extends JpaRepository<News, Long> {

}