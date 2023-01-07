package com.runtimeterror.sahisti.dailyChallengeError.service.impl;

import com.runtimeterror.sahisti.dailyChallengeError.repository.DailyChallengeErrorRepository;
import com.runtimeterror.sahisti.dailyChallengeError.service.DailyChallengeErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DailyChallengeErrorImpl implements DailyChallengeErrorService {

    @Autowired
    private DailyChallengeErrorRepository dailyChallengeErrorRepository;

}
