package com.runtimeterror.sahisti.news.controller.dto;

import com.runtimeterror.sahisti.news.entity.News;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
public class NewsDTO {
    Long id;
    LocalDateTime date;
    String title;
    String content;
    Boolean visible;

    public NewsDTO(News news) {
        this.id = news.getId();
        this.date = news.getDate();
        this.title = news.getTitle();
        this.content = news.getContent();
        this.visible = news.getVisible();
    }
}
