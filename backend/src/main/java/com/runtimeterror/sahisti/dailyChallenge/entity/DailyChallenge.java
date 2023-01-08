package com.runtimeterror.sahisti.dailyChallenge.entity;

import com.runtimeterror.sahisti.user.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "daily_challenge")
@Getter @Setter @NoArgsConstructor
public class DailyChallenge {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    LocalDate date;

    Float grade;
    Long numOfGrades;

    Boolean visible;

    int assignmentNumber;

    @ManyToOne
    @JoinColumn(name="coach_id", nullable=false)
    User coach;

    public DailyChallenge(LocalDate date, int assignmentNumber, User coach) {
        this.grade = 0f;
        this.numOfGrades = 0L;
        this.date = date;
        this.assignmentNumber = assignmentNumber;
        this.coach = coach;
        this.visible = true;
    }
}

