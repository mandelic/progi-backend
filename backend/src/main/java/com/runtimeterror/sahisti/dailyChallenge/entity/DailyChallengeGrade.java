package com.runtimeterror.sahisti.dailyChallenge.entity;

import com.runtimeterror.sahisti.user.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "dc_grade")
@Getter
@Setter
@NoArgsConstructor
public class DailyChallengeGrade {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    Long points;

    String solution;

    Boolean bonus;
    Long memberId;

    Long dailyChallengeId;

    public DailyChallengeGrade(Long points, String solution, User member, DailyChallenge dc, Boolean bonus) {
        this.points = points;
        this.solution = solution;
        this.memberId = member.getId();
        this.dailyChallengeId = dc.getId();
        this.bonus = bonus;
    }
}
