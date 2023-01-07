package com.runtimeterror.sahisti.dailyChallenge.controller;

import com.runtimeterror.sahisti.dailyChallenge.entity.DailyChallenge;
import com.runtimeterror.sahisti.dailyChallenge.service.DailyChallengeService;
import com.runtimeterror.sahisti.news.controller.dto.NewsDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


@RequestMapping("/v1/daily-challenge")
@RestController
@CrossOrigin(origins = "*")
public class DailyChallengeController {

    @Autowired
    private DailyChallengeService dailyChallengeService;

    @PostMapping("/make-a-move")
    public ResponseEntity<Boolean> makeAMove(@Valid @RequestBody com.runtimeterror.sahisti.ChessGame.controller.dto.AnswerDTO answerDTO) throws Exception {
        System.out.println(answerDTO.getMove());
        return ResponseEntity.ok(dailyChallengeService.startGame(answerDTO.getMove()));
    }

    @PostMapping("coach/{coachId}")
    public ResponseEntity<DailyChallenge> newChallenge(@PathVariable Long coachId, @RequestBody int assignmentNumber) throws Exception {
        return ResponseEntity.ok(dailyChallengeService.addDailyChallenge(assignmentNumber, coachId));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<DailyChallenge> deleteDailyChallenge(@PathVariable Long id) {
        return ResponseEntity.ok(dailyChallengeService.removeDailyChallenge(id));
    }


}

