package com.runtimeterror.sahisti.dailyChallenge.service;

public interface DailyChallengeService {
    void startGame();
    String inputMove(String move);
    int getChooseAssignment(int assignmentNumber);
}


