package com.runtimeterror.sahisti.dailyChallenge.service;

import com.github.bhlangonijr.chesslib.pgn.PgnHolder;

public class DailyChallengeServiceImpl implements DailyChallengeService {

    public void startGame() {
        PgnHolder pgn = new PgnHolder("sahisti/backend/src/main/resources/chessGames/WorldChamp2018.pgn"); //controller za odabir datoteke
        pgn.loadPgn();
        float score = 10;
        Game game = pgn.getGames().get(getChooseAssignment());
        game.loadMoveText();

        MoveList moves = game.getHalfMoves();
        int j = moves.size()-1;
        Board board = new Board();
        for(int i = 0; i<j;i++) {
            board.doMove(moves.get(i));
        }

        String s = getS();
        Move m1 = new Move(s,board.getSideToMove());
        System.out.println("FEN: " + board.getFen());
        Board b2 = board;
        b2.doMove(moves.get(j));
        List<Move> moves2 = board.legalMoves();

        System.out.println(moves2);
        if (moves2.contains(m1)) {
            board.doMove(m1);
            if (board.getFen().equals(b2.getFen()))
                System.out.println("Correct, well done.");
            else {
                if (score > 1)
                    score -= 0.5;
                System.out.println("Incorrect, try again.");
            }

        }
        else {
            if (score > 1)
                score -= 0.5;
            System.out.println("Invalid move, try again.");
        }
        //controller za pohranu rezultata
    }

    public String inputMove(String move) {
        return move;
    }

    public int getChooseAssignment(int assignmentNumber) {
        return assignmentNumber;
    }
}
