package com.runtimeterror.sahisti.news.entity;


import com.runtimeterror.sahisti.column.entity.Column;
import com.runtimeterror.sahisti.user.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Set;

@Entity
@Table(name = "news")
@Getter
@Setter
@NoArgsConstructor
public class News {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    LocalDateTime date;

    String title;
    String content;
    Boolean visible;

    @ManyToOne
    @JoinColumn(name="column_id", nullable=false)
    Column column;

    @ManyToOne
    @JoinColumn(name = "author_id", nullable = false)
    User author;

    public News(LocalDateTime date, String title, String content, User author, Column column) {
        this.date = date;
        this.title = title;
        this.content = content;
        this.author = author;
        this.column = column;
    }
}
