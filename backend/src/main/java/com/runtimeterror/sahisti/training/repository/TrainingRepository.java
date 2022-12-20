package com.runtimeterror.sahisti.training.repository;

import com.runtimeterror.sahisti.training.entity.Training;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TrainingRepository extends JpaRepository<Training, Long> {

}