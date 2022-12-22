package com.runtimeterror.sahisti.tournament.service;

import com.runtimeterror.sahisti.tournament.entity.Tournament;
import com.runtimeterror.sahisti.user.entity.User;

import java.util.List;

public interface TournamentService {

    Tournament addTournament(Tournament tournament);

    Tournament findById(long id);

    List<Tournament> findAllVisibile();

    List<Tournament> findAllByUserID(long id);

    User addMember(long id, long memberID);

}