package com.runtimeterror.sahisti.training.service.impl;

import com.runtimeterror.sahisti.training.repository.TrainingRepository;
import com.runtimeterror.sahisti.training.service.TrainingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TrainingServiceImpl implements TrainingService {

    @Autowired
    private TrainingRepository trainingRepository;
}
