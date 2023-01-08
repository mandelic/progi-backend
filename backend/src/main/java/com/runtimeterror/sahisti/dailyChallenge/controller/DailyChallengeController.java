package com.runtimeterror.sahisti.dailyChallenge.controller;

import com.runtimeterror.sahisti.dailyChallenge.controller.dto.*;
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
    public ResponseEntity<DailyChallengeDTO> newChallenge(@PathVariable Long coachId, @RequestBody AssignmentDTO assignmentDTO) throws Exception {
        return ResponseEntity.ok(new DailyChallengeDTO(dailyChallengeService.addDailyChallenge(assignmentDTO.getAssignmentNumber(), coachId)));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/{id}")
    public ResponseEntity<DailyChallengeDTO> deleteDailyChallenge(@PathVariable Long id) {
        return ResponseEntity.ok(new DailyChallengeDTO(dailyChallengeService.removeDailyChallenge(id)));
    }

    @PreAuthorize("hasAnyRole('ADMIN', 'SENSEI')")
    @GetMapping("/get-all")
    public ResponseEntity<AvailableChallenges> getAllChallenges() throws Exception {
        return ResponseEntity.ok(new AvailableChallenges(dailyChallengeService.getAll()));
    }

    @PreAuthorize("hasAnyRole('ADMIN', 'MEMBER')")
    @PostMapping("/grade")
    public ResponseEntity<GradeDTO> giveGrade(@RequestBody GradeDTO gradeDTO) {
        return ResponseEntity.ok(new GradeDTO(dailyChallengeService.giveGrade(gradeDTO.getGrade())));
    }

    @GetMapping("/grade")
    public ResponseEntity<GradeDTO> getGrade() {
        return ResponseEntity.ok(new GradeDTO(dailyChallengeService.getGrade()));
    }



}

