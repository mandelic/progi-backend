package com.runtimeterror.sahisti.news.controller;

import com.runtimeterror.sahisti.news.controller.dto.NewsDTO;
import com.runtimeterror.sahisti.news.entity.News;
import com.runtimeterror.sahisti.news.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RequestMapping("/v1/news")
@RestController
@CrossOrigin(origins = "*")
public class NewsController {

    @Autowired
    private NewsService newsService;

    @GetMapping
    public ResponseEntity<List<NewsDTO>> findAll() {
        return ResponseEntity.ok(newsService.findAll().stream().map(News -> new NewsDTO(News)).collect(Collectors.toList()));
    }

    @GetMapping("/{id}")
    public ResponseEntity<NewsDTO> findById(@PathVariable Long id) {
        return ResponseEntity.ok(new NewsDTO(newsService.findById(id)));
    }

    @PostMapping
    public ResponseEntity<NewsDTO> addUser(@Valid @RequestBody NewsDTO newsDTO) {
        News newNews = newsService.addNews(new News(newsDTO.getDate(), newsDTO.getTitle(), newsDTO.getVisible()));
        return ResponseEntity.status(HttpStatus.CREATED).body(new NewsDTO(newNews));
    }
}
