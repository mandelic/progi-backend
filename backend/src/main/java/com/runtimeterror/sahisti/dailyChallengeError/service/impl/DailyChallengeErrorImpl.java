package com.runtimeterror.sahisti.dailyChallengeError.service.impl;

import com.runtimeterror.sahisti.configuration.exception.EntityIdNotFoundException;
import com.runtimeterror.sahisti.configuration.exception.UserIdNotFoundException;
import com.runtimeterror.sahisti.dailyChallenge.entity.DailyChallenge;
import com.runtimeterror.sahisti.dailyChallenge.entity.DailyChallengeGrade;
import com.runtimeterror.sahisti.dailyChallenge.repository.DailyChallengeGradeRepository;
import com.runtimeterror.sahisti.dailyChallenge.repository.DailyChallengeRepository;
import com.runtimeterror.sahisti.dailyChallengeError.repository.DailyChallengeErrorRepository;
import com.runtimeterror.sahisti.dailyChallengeError.service.DailyChallengeErrorService;
import com.runtimeterror.sahisti.news.entity.DailyChallengeError;
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
    public DailyChallengeError validateError(Long dceId, Boolean validation) {
        DailyChallengeError dce = dailyChallengeErrorRepository.findById(dceId).orElseThrow(() -> new EntityIdNotFoundException("Daily challenge", dceId));
        dce.setValid(validation);
        dce.setChecked(true);
        if (validation == true) {
            revisePoints(dce);
        }
        return dailyChallengeErrorRepository.save(dce);
    }

    private void revisePoints(DailyChallengeError dce) {
        List<DailyChallengeGrade> gradeList = dailyChallengeGradeRepository.findAllByDailyChallengeId(dce.getDailyChallenge().getId());
        gradeList.forEach(g -> {
            if (g.getSolution().equals(dce.getSolution())) {
                g.setPoints(1L);
            } else {
                g.setPoints(0L);
            }
        });
        dailyChallengeGradeRepository.saveAll(gradeList);
    }
}
