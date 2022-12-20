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
    LocalDateTime date;
    String title;
    Boolean visible;

    public NewsDTO(News news) {
        this.date = news.getDate();
        this.title = news.getTitle();
        this.visible = news.getVisible();
    }
}
