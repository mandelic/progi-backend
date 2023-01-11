package com.runtimeterror.sahisti.training.entity;

import com.runtimeterror.sahisti.user.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "training")
@Getter
@Setter
@NoArgsConstructor
public class Training {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    LocalDateTime date;

    String location;

    Boolean visible;

    Long duration;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "coach_id", referencedColumnName = "id")
    User coach;

    @ManyToMany(mappedBy = "trainings")
    Set<User> members = new HashSet<>();

    public Training(LocalDateTime date, String location, Long duration, User coach){
        this.date = date;
        this.location = location;
        this.duration = duration;
        this.visible = true;
        this.coach = coach;
    }


}
