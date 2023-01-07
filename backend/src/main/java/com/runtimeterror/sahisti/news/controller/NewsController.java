package com.runtimeterror.sahisti.news.controller;

import com.runtimeterror.sahisti.news.controller.dto.NewsDTO;
import com.runtimeterror.sahisti.news.entity.News;
import com.runtimeterror.sahisti.news.service.NewsService;
import com.runtimeterror.sahisti.tournament.controller.dto.TournamentDetailsDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
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

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/{id}")
    public ResponseEntity<NewsDTO> deleteNews(@PathVariable Long id) {
        return ResponseEntity.ok(new NewsDTO(newsService.removeNews(id)));
    }
}
