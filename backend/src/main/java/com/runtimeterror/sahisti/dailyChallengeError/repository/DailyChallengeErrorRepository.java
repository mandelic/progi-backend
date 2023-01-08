package com.runtimeterror.sahisti.dailyChallengeError.repository;

import com.runtimeterror.sahisti.news.entity.DailyChallengeError;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DailyChallengeErrorRepository extends JpaRepository<DailyChallengeError, Long> {

    List<DailyChallengeError> findAllByChecked(Boolean checked);
}
