package com.runtimeterror.sahisti.tournament.repository;

import com.runtimeterror.sahisti.tournament.entity.Tournament;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface TournamentRepository extends JpaRepository<Tournament, Long> {

    List<Tournament> findAllByVisible(Boolean visible);

    List<Tournament> findAllByVisibleAndDateAfter(Boolean visible, LocalDateTime date);
}