package com.runtimeterror.sahisti.dailyChallenge.entity;

import com.runtimeterror.sahisti.user.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "dailychallenge",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "id")
        })
@Getter @Setter @NoArgsConstructor
public class DailyChallenge {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @NotBlank(message = "grade must be between 1 and 5")
    int grade;

    boolean visible;

    @ManyToOne
    @JoinColumn(name="coach_id", nullable=false)
    User coach;

    public DailyChallenge(Long id, int grade, boolean visible, User coach) {
        this.id = id;
        this.grade = grade;
        this.visible = visible;
        this.coach = coach;
    }
}

