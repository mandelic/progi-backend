package com.runtimeterror.sahisti.training.controller.dto;

import com.runtimeterror.sahisti.tournament.entity.Tournament;
import com.runtimeterror.sahisti.training.entity.Training;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class TrainingFormattedDTO {
    private Long id;
    private String date;
    private String location;
    private Boolean visible;
    private Long duration;
    private String coachName;

    public TrainingFormattedDTO(Training training) {
        this.id = training.getId();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd.MM.yyyy. HH:mm");
        this.date = formatter.format(training.getDate());
        this.location = training.getLocation();
        this.visible = training.getVisible();
        this.duration = training.getDuration();
        this.coachName = training.getCoach().getFirstName() + " " + training.getCoach().getLastName();
    }

}
