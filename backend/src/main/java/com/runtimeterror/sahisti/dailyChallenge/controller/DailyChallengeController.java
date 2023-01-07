package com.runtimeterror.sahisti.dailyChallenge.controller;

import com.runtimeterror.sahisti.dailyChallenge.controller.dto.AssignmentDTO;
import com.runtimeterror.sahisti.dailyChallenge.controller.dto.AvailableChallenges;
import com.runtimeterror.sahisti.dailyChallenge.controller.dto.BoardDTO;
import com.runtimeterror.sahisti.dailyChallenge.entity.DailyChallenge;
import com.runtimeterror.sahisti.dailyChallenge.service.DailyChallengeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


@RequestMapping("/v1/daily-challenge")
@RestController
@CrossOrigin(origins = "*")
public class DailyChallengeController {

    @Autowired
    private DailyChallengeService dailyChallengeService;

    @GetMapping
    public ResponseEntity<BoardDTO> showBoard() throws Exception {
        return ResponseEntity.ok(dailyChallengeService.showBoard());
    }

    @PostMapping("/make-a-move")
    public ResponseEntity<Boolean> makeAMove(@Valid @RequestBody com.runtimeterror.sahisti.ChessGame.controller.dto.AnswerDTO answerDTO) throws Exception {
        return ResponseEntity.ok(dailyChallengeService.startGame(answerDTO.getMove()));
    }

    @PreAuthorize("hasAnyRole('ADMIN', 'SENSEI')")
    @PostMapping("coach/{coachId}")
    public ResponseEntity<DailyChallenge> newChallenge(@PathVariable Long coachId, @RequestBody AssignmentDTO assignmentDTO) throws Exception {
        return ResponseEntity.ok(dailyChallengeService.addDailyChallenge(assignmentDTO.getAssignmentNumber(), coachId));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/{id}")
    public ResponseEntity<DailyChallenge> deleteDailyChallenge(@PathVariable Long id) {
        return ResponseEntity.ok(dailyChallengeService.removeDailyChallenge(id));
    }

    @PreAuthorize("hasAnyRole('ADMIN', 'SENSEI')")
    @GetMapping("/get-all")
    public ResponseEntity<AvailableChallenges> getAllChallenges() throws Exception {
        return ResponseEntity.ok(new AvailableChallenges(dailyChallengeService.getAll()));
    }



}

