package com.runtimeterror.sahisti.dailyChallenge.service;

import com.github.bhlangonijr.chesslib.Board;
import com.github.bhlangonijr.chesslib.Square;
import com.github.bhlangonijr.chesslib.game.Game;
import com.github.bhlangonijr.chesslib.move.Move;
import com.github.bhlangonijr.chesslib.move.MoveList;
import com.github.bhlangonijr.chesslib.pgn.PgnHolder;
import com.runtimeterror.sahisti.dailyChallenge.repository.DailyChallengeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DailyChallengeServiceImpl implements DailyChallengeService {

    @Autowired
    private DailyChallengeRepository dailyChallengeRepository;

    public void startGame(int assignmentNumber, String move) throws Exception {
        PgnHolder pgn = new PgnHolder("sahisti/backend/src/main/resources/chessgames/WorldChamp2018.pgn"); //controller za odabir datoteke
        pgn.loadPgn();
        float score = 10;
        Game game = pgn.getGames().get(assignmentNumber);
        game.loadMoveText();

        MoveList moves = game.getHalfMoves();
        int j = moves.size()-1;
        Board board = new Board();
        for(int i = 0; i<j;i++) {
            board.doMove(moves.get(i));
        }

        Move m1 = new Move(move,board.getSideToMove());
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
}
