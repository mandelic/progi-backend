package com.runtimeterror.sahisti.tournament.controller.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
@Getter
@Setter
@NoArgsConstructor
public class TournamentDTO {
        private String title;
        private LocalDateTime date;
        private String location;
        private long memberId;



}
