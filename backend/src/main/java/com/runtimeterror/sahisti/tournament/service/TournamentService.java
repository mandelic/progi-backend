package com.runtimeterror.sahisti.tournament.service;

import com.runtimeterror.sahisti.tournament.entity.Tournament;
import com.runtimeterror.sahisti.user.entity.User;

import java.util.List;

public interface TournamentService {

    Tournament addTournament(Tournament tournament);

    Tournament findById(Long id);

    List<Tournament> findAllVisibile();

    List<Tournament> findAllByUserID(Long id);

    User addMember(Long id, Long memberID);
    
    Tournament removeTournament(Long id);

    List<Tournament> findAllByCoachId(Long id);

}