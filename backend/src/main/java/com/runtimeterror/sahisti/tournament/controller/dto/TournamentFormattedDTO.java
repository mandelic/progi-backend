package com.runtimeterror.sahisti.tournament.controller.dto;

import com.runtimeterror.sahisti.tournament.entity.Tournament;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.format.DateTimeFormatter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TournamentFormattedDTO {

    private Long id;
    private String date;
    private String location;
    private Boolean visible;
    private String title;
    private String coachName;


    public TournamentFormattedDTO(Tournament tournament) {
        this.id = tournament.getId();
        this.title = tournament.getTitle();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd.MM.yyyy. HH:mm");
        this.date = formatter.format(tournament.getDate());
        this.location = tournament.getLocation();
        this.coachName = tournament.getCoach().getFirstName() + " " + tournament.getCoach().getLastName();
        this.visible = tournament.getVisible();
    }
}

