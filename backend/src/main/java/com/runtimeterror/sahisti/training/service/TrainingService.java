package com.runtimeterror.sahisti.training.service;

import com.runtimeterror.sahisti.tournament.entity.Tournament;
import com.runtimeterror.sahisti.training.entity.Training;
import com.runtimeterror.sahisti.user.entity.User;

import java.util.List;

public interface TrainingService{

    List<Training> findAllRelevant();

    List<Training> findAllByUserId(Long id);

    Training addTraining(Training training);

    User addMember(Long id, Long memberId);

    Training removeTraining(Long id);
}