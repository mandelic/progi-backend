package com.runtimeterror.sahisti.dailyChallenge.controller.dto;

import com.runtimeterror.sahisti.dailyChallenge.entity.DailyChallenge;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class DailyChallengeDTO {
    private Long id;
    private LocalDate date;
    private int assignmentNumber;
    private Long coachId;

    public DailyChallengeDTO(DailyChallenge dailyChallenge) {
        this.id = dailyChallenge.getId();
        this.date = dailyChallenge.getDate();
        this.assignmentNumber = dailyChallenge.getAssignmentNumber();
        this.coachId = dailyChallenge.getCoach().getId();
    }
}
