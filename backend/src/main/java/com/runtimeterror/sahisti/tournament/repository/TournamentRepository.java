package com.runtimeterror.sahisti.tournament.repository;

import com.runtimeterror.sahisti.tournament.entity.Tournament;
import com.runtimeterror.sahisti.transaction.entity.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TournamentRepository extends JpaRepository<Tournament, Long> {

}