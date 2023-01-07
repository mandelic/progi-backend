package com.runtimeterror.sahisti.dailyChallenge.controller;

import com.runtimeterror.sahisti.dailyChallenge.entity.DailyChallenge;
import com.runtimeterror.sahisti.dailyChallenge.service.DailyChallengeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RequestMapping("/v1/daily-challenge")
@RestController
@CrossOrigin(origins = "*")
public class DailyChallengeController {

    @Autowired
    private DailyChallengeService dailyChallengeService;


}

