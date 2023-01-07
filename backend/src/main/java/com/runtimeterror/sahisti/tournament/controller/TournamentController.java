package com.runtimeterror.sahisti.tournament.controller;

import com.runtimeterror.sahisti.tournament.controller.dto.TournamentDetailsDTO;
import com.runtimeterror.sahisti.tournament.entity.Tournament;
import com.runtimeterror.sahisti.tournament.service.TournamentService;
import com.runtimeterror.sahisti.training.controller.dto.TrainingDetailsDTO;
import com.runtimeterror.sahisti.user.controller.dto.UserDetailsDTO;
import com.runtimeterror.sahisti.user.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RequestMapping("/v1/tournament")
@RestController
@CrossOrigin(origins = "*")
public class TournamentController {

    @Autowired
    private TournamentService tournamentService;

    @GetMapping
    public ResponseEntity<List<TournamentDetailsDTO>> findAll() {
        return ResponseEntity.ok(tournamentService.findAllVisibile().stream().map(TournamentDetailsDTO::new).collect(Collectors.toList()));
    }

    @PreAuthorize("hasAnyRole('ADMIN', 'MEMBER')")
    @PostMapping("/{id}/member")
    public ResponseEntity<UserDetailsDTO> addMember(@PathVariable Long id, @RequestBody Long memberId) {
        User user = tournamentService.addMember(id, memberId);
        return ResponseEntity.status(HttpStatus.CREATED).body(new UserDetailsDTO(user));
    }

    @GetMapping("/{id}/applied")
    public ResponseEntity<List<TournamentDetailsDTO>> findAllByUserId(@PathVariable Long id) {
        return ResponseEntity.ok(tournamentService.findAllByUserID(id).stream().map(TournamentDetailsDTO::new).collect(Collectors.toList()));
    }

    @GetMapping("/{id}/not-applied")
    public ResponseEntity<List<TournamentDetailsDTO>> findAllByUserIdNotApplied(@PathVariable Long id) {
        List<Tournament> allRelevant= tournamentService.findAllVisibile();
        List<Tournament> allByUserId= tournamentService.findAllByUserID(id);
        allRelevant = allRelevant.stream().filter(training -> !allByUserId.contains(training)).collect(Collectors.toList());
        return ResponseEntity.ok(allRelevant.stream().map(TournamentDetailsDTO::new).collect(Collectors.toList()));
    }
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/{id}")
    public ResponseEntity<TournamentDetailsDTO> deleteTournament(@PathVariable Long id) {
        return ResponseEntity.ok(new TournamentDetailsDTO(tournamentService.removeTournament(id)));
    }

}