package com.runtimeterror.sahisti.dailyChallengeError.controller;

import com.runtimeterror.sahisti.dailyChallengeError.service.DailyChallengeErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/v1/daily-challenge-error")
@RestController
@CrossOrigin(origins = "*")
public class DailyChallengeErrorController {

    @Autowired
    private DailyChallengeErrorService dailyChallengeErrorService;

}
