package com.runtimeterror.sahisti.tournament.service.impl;

import com.runtimeterror.sahisti.tournament.repository.TournamentRepository;
import com.runtimeterror.sahisti.tournament.service.TournamentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TournamentServiceImpl implements TournamentService {

    @Autowired
    private TournamentRepository tournamentRepository;
}
