package com.runtimeterror.sahisti.dailyChallenge.service.impl;

import com.github.bhlangonijr.chesslib.Board;
import com.github.bhlangonijr.chesslib.game.Game;
import com.github.bhlangonijr.chesslib.move.Move;
import com.github.bhlangonijr.chesslib.move.MoveList;
import com.github.bhlangonijr.chesslib.pgn.PgnHolder;
import com.runtimeterror.sahisti.configuration.exception.CustomMessageException;
import com.runtimeterror.sahisti.configuration.exception.EntityIdNotFoundException;
import com.runtimeterror.sahisti.configuration.exception.UserIdNotFoundException;
import com.runtimeterror.sahisti.dailyChallenge.entity.DailyChallenge;
import com.runtimeterror.sahisti.dailyChallenge.repository.DailyChallengeRepository;
import com.runtimeterror.sahisti.dailyChallenge.service.DailyChallengeService;
import com.runtimeterror.sahisti.user.entity.User;
import com.runtimeterror.sahisti.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class DailyChallengeServiceImpl implements DailyChallengeService {

    @Autowired
    private DailyChallengeRepository dailyChallengeRepository;

    @Autowired
    private UserRepository userRepository;

    public Boolean startGame(String move) throws Exception {

        PgnHolder pgn = new PgnHolder("src/main/resources/chessGames/WorldChamp2018.pgn/"); //controller za odabir datoteke
        pgn.loadPgn();
        DailyChallenge dc = dailyChallengeRepository.findByDateAndVisible(LocalDate.now(), true);
        if (dc == null) throw new CustomMessageException("Trener još uvijek nije odabrao dnevnu taktiku. Pokušaj ponovno kasnije.");
        Game game = pgn.getGames().get(dc.getAssignmentNumber() - 1);
        game.loadMoveText();

        MoveList moves = game.getHalfMoves();
        int j = moves.size()-1;
        Board board = new Board();
        for(int i = 0; i<j;i++) {
            board.doMove(moves.get(i));
        }
        System.out.println(moves.get(j));
        Move m1 = new Move(move,board.getSideToMove());
        Board b2 = board.clone();
        b2.doMove(moves.get(j));
        List<Move> moves2 = board.legalMoves();
        System.out.println(moves2);
        System.out.println(board.getSideToMove());
        if (moves2.contains(m1)) {
            board.doMove(m1);
            return board.getFen().equals(b2.getFen());
        }
        else {
            return false;
        }
    }

    @Override
    public DailyChallenge addDailyChallenge(int assignmentNumber, Long id) {
        DailyChallenge dc = dailyChallengeRepository.findByDateAndVisible(LocalDate.now(), true);
        if (dc != null) throw new CustomMessageException("Trener je već odabrao dnevnu taktiku za danas.");
        User coach = userRepository.findById(id).orElseThrow(() -> new UserIdNotFoundException(id));
        return dailyChallengeRepository.save(new DailyChallenge(0, LocalDate.now(),assignmentNumber, coach));
    }

    @Override
    public DailyChallenge removeDailyChallenge(Long id) {
        DailyChallenge dailyChallenge = dailyChallengeRepository.findById(id).orElseThrow(() -> new EntityIdNotFoundException("DailyChallenge", id));
        dailyChallenge.setVisible(false);
        return dailyChallengeRepository.save(dailyChallenge);
    }

    @Override
    public String showBoard() throws Exception {
        PgnHolder pgn = new PgnHolder("src/main/resources/chessGames/WorldChamp2018.pgn/"); //controller za odabir datoteke
        pgn.loadPgn();
        DailyChallenge dc = dailyChallengeRepository.findByDateAndVisible(LocalDate.now(), true);
        if (dc == null) throw new CustomMessageException("Trener još uvijek nije odabrao dnevnu taktiku. Pokušaj ponovno kasnije.");
        Game game = pgn.getGames().get(dc.getAssignmentNumber() - 1);
        game.loadMoveText();
        MoveList moves = game.getHalfMoves();
        int j = moves.size()-1;
        Board board = new Board();
        for(int i = 0; i<j;i++) {
            board.doMove(moves.get(i));
        }
        return board.toString();
    }
}
