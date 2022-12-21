package com.runtimeterror.sahisti.training.controller.dto;

import com.runtimeterror.sahisti.tournament.entity.Tournament;
import com.runtimeterror.sahisti.training.entity.Training;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class TrainingDetailsDTO {
    private Long id;
    private LocalDateTime date;
    private String location;
    private Boolean visible;
    private Long duration;
    private String coachName;

    public TrainingDetailsDTO(Training training) {
        this.id = training.getId();
        this.date = training.getDate();
        this.location = training.getLocation();
        this.visible = training.getVisible();
        this.duration = training.getDuration();
        this.coachName = training.getCoach().getFirstName() + " " + training.getCoach().getLastName();
    }

}
