package com.runtimeterror.sahisti.tournament.entity;

import com.runtimeterror.sahisti.user.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "tournament")
@Getter
@Setter
@NoArgsConstructor
public class Tournament {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    LocalDateTime date;

    String title;

    String location;

    Boolean visible;

    @ManyToOne
    @JoinColumn(name="coach_id", nullable=false)
    User coach;

    @ManyToMany
    Set<User> members = new HashSet<>();

    public Tournament(LocalDateTime date, String title, String location, User coach) {
        this.date = date;
        this.title = title;
        this.location = location;
        this.coach = coach;
        visible = true;
    }
}
