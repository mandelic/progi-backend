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
    private String result;
    private String whitePlayer;
    private String blackPlayer;
    private String solution;

    public BoardDTO(String board, String result, String whitePlayer, String blackPlayer, String solution) {
        String[] boardSplit = board.split("\n");
        for (int i  = 0; i < 8; i++) {
            /*String line = boardSplit[i];
            line = line.replace("p", "♙");
            line = line.replace("k", "♔");
            line = line.replace("r", "♖");
            line = line.replace("q", "♕");
            line = line.replace("b", "♗");
            line = line.replace("n", "♘");
            line = line.replace("P", "♟");
            line = line.replace("K", "♚");
            line = line.replace("R", "♜");
            line = line.replace("Q", "♛");
            line = line.replace("B", "♝");
            line = line.replace("N", "♞");
            line = line.replace(".", "◩");
            this.board.add(line);*/
            this.board.add(boardSplit[i]);
        }
        side = boardSplit[8].split(":")[1].trim();
        this.result = result;
        this.whitePlayer  = whitePlayer;
        this.blackPlayer = blackPlayer;
        this.solution = solution;
    }
}