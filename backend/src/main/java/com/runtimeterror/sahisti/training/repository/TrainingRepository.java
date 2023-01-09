package com.runtimeterror.sahisti.training.repository;

import com.runtimeterror.sahisti.training.entity.Training;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDateTime;
import java.util.List;

public interface TrainingRepository extends JpaRepository<Training, Long> {
    List<Training> findAllByVisible(Boolean visible);
    List<Training> findAllByVisibleAndDateAfter(Boolean visible, LocalDateTime date);

    @Query(value = "SELECT t.* FROM training t LEFT JOIN training_member t_m ON t_m.training_id = t.id WHERE t_m.member_id = :id", nativeQuery = true)
    List<Training> findAllByUserId(Long id);

    List<Training> findAllByCoachIdOrderByDateDesc(Long id);
}