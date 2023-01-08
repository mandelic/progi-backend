package com.runtimeterror.sahisti.tournament.repository;

import com.runtimeterror.sahisti.tournament.entity.Tournament;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;

import java.time.LocalDateTime;
import java.util.List;

public interface TournamentRepository extends JpaRepository<Tournament, Long> {

    List<Tournament> findAllByVisible(Boolean visible);

    List<Tournament> findAllByVisibleAndDateAfter(Boolean visible, LocalDateTime date);
    @Query(value = "SELECT t.* FROM tournament t LEFT JOIN tournament_members t_m ON t_m.tournament_id = t.id WHERE t_m.member_id = :id", nativeQuery = true)
    List<Tournament> findAllByUserId(Long id);

}