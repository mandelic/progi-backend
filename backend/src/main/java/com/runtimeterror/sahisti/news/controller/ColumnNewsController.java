package com.runtimeterror.sahisti.news.controller;



import com.runtimeterror.sahisti.column.entity.Column;
import com.runtimeterror.sahisti.column.service.ColumnService;
import com.runtimeterror.sahisti.news.controller.dto.NewsDTO;
import com.runtimeterror.sahisti.news.entity.News;
import com.runtimeterror.sahisti.news.service.NewsService;
import com.runtimeterror.sahisti.tournament.controller.dto.TournamentDTO;
import com.runtimeterror.sahisti.tournament.controller.dto.TournamentDetailsDTO;
import com.runtimeterror.sahisti.tournament.entity.Tournament;
import com.runtimeterror.sahisti.tournament.service.TournamentService;
import com.runtimeterror.sahisti.user.entity.User;
import com.runtimeterror.sahisti.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RequestMapping("/v1")
@RestController
@CrossOrigin(origins = "*")
public class ColumnNewsController {

    @Autowired
    private ColumnService columnService;

    @Autowired
    private NewsService newsService;

    @Autowired
    private UserService userService;

    @PreAuthorize("hasAnyRole('ADMIN', 'SENSEI')")
    @PostMapping("/column/{columnId}/author/{authorId}/news")
    public ResponseEntity<NewsDTO> addNews(@PathVariable("columnId") Long columnId, @PathVariable("authorId") Long authorId, @Valid @RequestBody NewsDTO newsDTO) {
        User author = userService.findById(authorId);
        Column column = columnService.findById(columnId);
        News news = newsService.addNews(new News(newsDTO.getDate(), newsDTO.getTitle(), newsDTO.getContent(), author, column));
        return ResponseEntity.status(HttpStatus.CREATED).body(new NewsDTO(news));
    }

    @GetMapping("/column/{columnId}/news")
    public ResponseEntity<List<NewsDTO>> getNewsByColumn(@PathVariable("columnId") Long columnId) {
        List<News> newsByColumnId = newsService.findByColumnId(columnId);
        return ResponseEntity.ok(newsByColumnId.stream().map(NewsDTO::new).collect(Collectors.toList()));
    }

}
