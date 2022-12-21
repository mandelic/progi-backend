package com.runtimeterror.sahisti.tournament.controller;



import com.runtimeterror.sahisti.tournament.controller.dto.TournamentDTO;
import com.runtimeterror.sahisti.tournament.controller.dto.TournamentDetailsDTO;
import com.runtimeterror.sahisti.tournament.entity.Tournament;
import com.runtimeterror.sahisti.tournament.service.TournamentService;
import com.runtimeterror.sahisti.user.entity.User;
import com.runtimeterror.sahisti.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RequestMapping("/v1")
@RestController
@CrossOrigin(origins = "*")
public class CoachTournamentController {

    @Autowired
    private TournamentService tournamentService;

    @Autowired
    private UserService userService;

    @PostMapping("/coach/{id}/tournament")
    public ResponseEntity<TournamentDetailsDTO> addTournament(@PathVariable Long id, @Valid @RequestBody TournamentDTO tournamentDTO) {
        User coach = userService.findById(id);
        Tournament tournament = tournamentService.addTournament(new Tournament(tournamentDTO.getDate(),tournamentDTO.getTitle(),tournamentDTO.getLocation(),coach));
        return ResponseEntity.status(HttpStatus.CREATED).body(new TournamentDetailsDTO(tournament));
    }

}
