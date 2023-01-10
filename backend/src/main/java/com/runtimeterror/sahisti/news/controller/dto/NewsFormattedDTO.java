package com.runtimeterror.sahisti.news.controller.dto;

import com.runtimeterror.sahisti.news.entity.News;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Getter
@Setter
@NoArgsConstructor
public class NewsFormattedDTO {
    Long id;
    String date;
    String title;
    String content;
    Boolean visible;
    Long columnId;
    String author;

    public NewsFormattedDTO(News news) {
        this.id = news.getId();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd.MM.yyyy.");
        this.date = formatter.format(news.getDate());
        this.title = news.getTitle();
        this.content = news.getContent();
        this.columnId = news.getColumn().getId();
        this.visible = news.getVisible();
        this.author = news.getAuthor().getFirstName() + " " + news.getAuthor().getLastName();
    }
}
