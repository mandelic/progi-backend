package com.runtimeterror.sahisti.dailyChallenge.repository;

import com.runtimeterror.sahisti.dailyChallenge.entity.DailyChallenge;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DailyChallengeRepository extends JpaRepository<DailyChallenge, Long> {

}
