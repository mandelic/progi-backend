package com.runtimeterror.sahisti.tournament.controller;

import com.runtimeterror.sahisti.tournament.controller.dto.TournamentDetailsDTO;
import com.runtimeterror.sahisti.tournament.service.TournamentService;
import com.runtimeterror.sahisti.user.controller.dto.UserDetailsDTO;
import com.runtimeterror.sahisti.user.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    @PostMapping("/{id}/member")
    public ResponseEntity<UserDetailsDTO> addMember(@PathVariable Long id, @RequestBody Long memberId) {
        User user = tournamentService.addMember(id, memberId);
        return ResponseEntity.status(HttpStatus.CREATED).body(new UserDetailsDTO(user));
    }








}