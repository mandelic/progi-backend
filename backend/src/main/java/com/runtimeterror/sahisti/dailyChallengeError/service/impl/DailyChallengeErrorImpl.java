package com.runtimeterror.sahisti.dailyChallengeError.service.impl;

import com.github.bhlangonijr.chesslib.game.Game;
import com.github.bhlangonijr.chesslib.pgn.PgnHolder;
import com.runtimeterror.sahisti.configuration.exception.EntityIdNotFoundException;
import com.runtimeterror.sahisti.configuration.exception.UserIdNotFoundException;
import com.runtimeterror.sahisti.dailyChallenge.entity.DailyChallenge;
import com.runtimeterror.sahisti.dailyChallenge.entity.DailyChallengeGrade;
import com.runtimeterror.sahisti.dailyChallenge.repository.DailyChallengeGradeRepository;
import com.runtimeterror.sahisti.dailyChallenge.repository.DailyChallengeRepository;
import com.runtimeterror.sahisti.dailyChallengeError.repository.DailyChallengeErrorRepository;
import com.runtimeterror.sahisti.dailyChallengeError.service.DailyChallengeErrorService;
import com.runtimeterror.sahisti.news.entity.DailyChallengeError;
import com.runtimeterror.sahisti.rankedList.entity.RankedList;
import com.runtimeterror.sahisti.rankedList.repository.RankedListRepository;
import com.runtimeterror.sahisti.user.entity.User;
import com.runtimeterror.sahisti.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DailyChallengeErrorImpl implements DailyChallengeErrorService {

    @Autowired
    private DailyChallengeErrorRepository dailyChallengeErrorRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private DailyChallengeRepository dailyChallengeRepository;

    @Autowired
    private DailyChallengeGradeRepository dailyChallengeGradeRepository;

    @Autowired
    private RankedListRepository rankedListRepository;

    @Override
    public DailyChallengeError createNewTicket(Long userId, Long dcId, String solution, String description) {
        User member = userRepository.findById(userId).orElseThrow(() -> new UserIdNotFoundException(userId));
        DailyChallenge dc = dailyChallengeRepository.findById(dcId).orElseThrow(() -> new EntityIdNotFoundException("Daily challenge", dcId));
        DailyChallengeError dce = new DailyChallengeError(solution, description, dc, member);
        return dailyChallengeErrorRepository.save(dce);
    }

    @Override
    public List<DailyChallengeError> getAllUnchecked() {
        return dailyChallengeErrorRepository.findAllByChecked(false);
    }

    @Override
    public DailyChallengeError validateError(Long dceId, Boolean validation) throws Exception {
        DailyChallengeError dce = dailyChallengeErrorRepository.findById(dceId).orElseThrow(() -> new EntityIdNotFoundException("Daily challenge", dceId));
        if (validation == true) {
            revisePoints(dce);
            DailyChallengeError dceTemp = dailyChallengeErrorRepository.findDailyChallengeErrorByDailyChallengeIdAndValid(dce.getDailyChallenge().getId(), true);
            if (dceTemp != null) {
                dceTemp.setValid(false);
                dailyChallengeErrorRepository.save(dceTemp);
            }
        }
        dce.setValid(validation);
        dce.setChecked(true);
        return dailyChallengeErrorRepository.save(dce);
    }

    private void revisePoints(DailyChallengeError dce) throws Exception {
        List<DailyChallengeGrade> gradeList = dailyChallengeGradeRepository.findAllByDailyChallengeId(dce.getDailyChallenge().getId());
        PgnHolder pgn = new PgnHolder("src/main/resources/chessGames/WorldChamp2018.pgn/"); //controller za odabir datoteke
        pgn.loadPgn();
        DailyChallenge dc = dce.getDailyChallenge();
        Game game = pgn.getGames().get(dc.getAssignmentNumber());
        Long points = game.getResult().equals("DRAW") ? 2L : 1L;
        gradeList.stream().forEach(g -> {
            if (g.getSolution().equals(dce.getSolution())) {
                if (rankedListRepository.existsByMember(g.getMemberId())) {
                    RankedList list = rankedListRepository.findByMember(g.getMemberId());
                    if (g.getBonus()) list.setPoints(list.getPoints() + points + 1);
                    else list.setPoints(list.getPoints() + points);
                    rankedListRepository.save(list);
                } else {
                    RankedList list = g.getBonus() ? new RankedList(points + 1, g.getMemberId()) : new RankedList(points, g.getMemberId());
                    rankedListRepository.save(list);
                }
                if (g.getBonus()) g.setPoints(points + 1);
                else g.setPoints(points);
            } else {
                if (rankedListRepository.existsByMember(g.getMemberId())) {
                    RankedList list = rankedListRepository.findByMember(g.getMemberId());
                    list.setPoints(list.getPoints() - g.getPoints());
                    rankedListRepository.save(list);
                } else {
                    RankedList list = new RankedList(0L, g.getMemberId());
                    rankedListRepository.save(list);
                }
                g.setPoints(0L);
            }
        });
        dailyChallengeGradeRepository.saveAll(gradeList);
    }
}
