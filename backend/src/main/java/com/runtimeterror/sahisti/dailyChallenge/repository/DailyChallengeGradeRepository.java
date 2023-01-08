package com.runtimeterror.sahisti.dailyChallenge.repository;

import com.runtimeterror.sahisti.dailyChallenge.entity.DailyChallengeGrade;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DailyChallengeGradeRepository extends JpaRepository<DailyChallengeGrade, Long> {
        Boolean existsDailyChallengeGradeByDailyChallengeIdAndMemberId(Long dailyChallengeId, Long memberId);
        DailyChallengeGrade findByMemberId(Long memberId);

}
