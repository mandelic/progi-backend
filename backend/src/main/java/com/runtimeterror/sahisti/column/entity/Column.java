package com.runtimeterror.sahisti.column.entity;

import com.runtimeterror.sahisti.news.entity.News;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Set;

@Entity
@Table(name = "columns")
@Getter
@Setter
@NoArgsConstructor
public class Column {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @NotBlank(message = "title must not be blank")
    @Size(max = 100)
    String title;

    @OneToMany(mappedBy="column")
    private Set<News> news;

    public Column(String title) {
        this.title = title;
    }
}
