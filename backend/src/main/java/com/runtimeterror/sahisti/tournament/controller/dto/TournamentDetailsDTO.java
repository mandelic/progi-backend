package com.runtimeterror.sahisti.tournament.controller.dto;

import com.runtimeterror.sahisti.tournament.entity.Tournament;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TournamentDetailsDTO {

    private Long id;
    private LocalDateTime date;
    private String location;
    private Boolean visible;
    private String title;
    private String coachName;


    public TournamentDetailsDTO(Tournament tournament) {
        this.id = tournament.getId();
        this.title = tournament.getTitle();
        this.date = tournament.getDate();
        this.location = tournament.getLocation();
        this.coachName = tournament.getCoach().getFirstName() + " " + tournament.getCoach().getLastName();
        this.visible = tournament.getVisible();
    }
}
