package com.runtimeterror.sahisti.tournament.controller;



import com.runtimeterror.sahisti.tournament.controller.dto.TournamentDTO;
import com.runtimeterror.sahisti.tournament.controller.dto.TournamentDetailsDTO;
import com.runtimeterror.sahisti.tournament.entity.Tournament;
import com.runtimeterror.sahisti.tournament.service.TournamentService;
import com.runtimeterror.sahisti.training.controller.dto.TrainingDetailsDTO;
import com.runtimeterror.sahisti.training.entity.Training;
import com.runtimeterror.sahisti.user.entity.User;
import com.runtimeterror.sahisti.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RequestMapping("/v1")
@RestController
@CrossOrigin(origins = "*")
public class CoachTournamentController {

    @Autowired
    private TournamentService tournamentService;

    @Autowired
    private UserService userService;

    @PreAuthorize("hasAnyRole('ADMIN', 'SENSEI')")
    @PostMapping("/coach/{id}/tournament")
    public ResponseEntity<TournamentDetailsDTO> addTournament(@PathVariable Long id, @Valid @RequestBody TournamentDTO tournamentDTO) {
        User coach = userService.findById(id);
        Tournament tournament = tournamentService.addTournament(new Tournament(tournamentDTO.getDate(),tournamentDTO.getTitle(),tournamentDTO.getLocation(),coach));
        return ResponseEntity.status(HttpStatus.CREATED).body(new TournamentDetailsDTO(tournament));
    }

    @PreAuthorize("hasAnyRole('ADMIN', 'SENSEI')")
    @GetMapping("/coach/{id}/tournament")
    public ResponseEntity<List<TournamentDetailsDTO>> getTournamentsByTrainer(@PathVariable Long id) {
        List<Tournament> tournamentList = tournamentService.findAllByCoachId(id);
        return ResponseEntity.ok(tournamentList.stream().map(TournamentDetailsDTO::new).collect(Collectors.toList()));
    }

}
