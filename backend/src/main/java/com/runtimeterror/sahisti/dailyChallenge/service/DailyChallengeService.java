package com.runtimeterror.sahisti.dailyChallenge.service;

import com.github.bhlangonijr.chesslib.Board;
import com.runtimeterror.sahisti.dailyChallenge.controller.dto.BoardDTO;
import com.runtimeterror.sahisti.dailyChallenge.entity.DailyChallenge;

import java.util.List;

public interface DailyChallengeService {
    Boolean startGame(Long id, String move, Boolean bonus) throws Exception;

    DailyChallenge addDailyChallenge(int assignmentNumber, Long id);

    DailyChallenge removeDailyChallenge(Long id);

    BoardDTO showBoard() throws Exception;

    List<BoardDTO> getAll() throws Exception;

    Float giveGrade(Float grade);

    Float getGrade();
}


