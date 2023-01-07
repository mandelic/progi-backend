package com.runtimeterror.sahisti.dailyChallenge.service;

import com.github.bhlangonijr.chesslib.Board;
import com.runtimeterror.sahisti.dailyChallenge.entity.DailyChallenge;

public interface DailyChallengeService {
    Boolean startGame(String move) throws Exception;

    DailyChallenge addDailyChallenge(int assignmentNumber, Long id);

    DailyChallenge removeDailyChallenge(Long id);

    String showBoard() throws Exception;
}


