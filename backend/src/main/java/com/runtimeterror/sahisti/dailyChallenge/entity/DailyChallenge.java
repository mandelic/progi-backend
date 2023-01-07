package com.runtimeterror.sahisti.dailyChallenge.entity;

import com.runtimeterror.sahisti.user.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "daily_challenge",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "id")
        })
@Getter @Setter @NoArgsConstructor
public class DailyChallenge {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    LocalDate date;


    int grade;

    Boolean visible;

    int assignmentNumber;

    @ManyToOne
    @JoinColumn(name="coach_id", nullable=false)
    User coach;

    public DailyChallenge(int grade, LocalDate date, int assignmentNumber, User coach) {
        this.grade = grade;
        this.date = date;
        this.assignmentNumber = assignmentNumber;
        this.coach = coach;
        this.visible = true;
    }
}

