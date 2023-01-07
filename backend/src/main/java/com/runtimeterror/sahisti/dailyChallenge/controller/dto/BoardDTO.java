package com.runtimeterror.sahisti.dailyChallenge.controller.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;


@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor
public class BoardDTO {

    private List<String> board = new ArrayList<>();
    private String side;

    public BoardDTO(String board) {
        String[] boardSplit = board.split("\n");
        for (int i  = 0; i < 8; i++) {
            this.board.add(boardSplit[i]);
        }
        side = boardSplit[8];
    }
}