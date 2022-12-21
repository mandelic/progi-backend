package com.runtimeterror.sahisti.tournament.service.impl;

import com.runtimeterror.sahisti.configuration.exception.EntityIdNotFoundException;
import com.runtimeterror.sahisti.configuration.exception.UserIdNotFoundException;
import com.runtimeterror.sahisti.tournament.entity.Tournament;
import com.runtimeterror.sahisti.tournament.repository.TournamentRepository;
import com.runtimeterror.sahisti.tournament.service.TournamentService;
import com.runtimeterror.sahisti.user.entity.User;
import com.runtimeterror.sahisti.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TournamentServiceImpl implements TournamentService {

    @Autowired
    private TournamentRepository tournamentRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public Tournament addTournament(Tournament tournament) {
        return tournamentRepository.save(tournament);
    }

    @Override
    public Tournament findById(long id) {
        return tournamentRepository.findById(id).orElseThrow();
    }

    @Override
    public List<Tournament> findAllVisibile() {
        userRepository.findAll();
        return tournamentRepository.findAllByVisible(true);
    }

    @Override
    public User addMember(long id, long memberID) {
        Tournament tournament = tournamentRepository.findById(id).orElseThrow(() -> new EntityIdNotFoundException("Tournament", id));
        userRepository.findAll();
        User member = userRepository.findById(memberID).orElseThrow(() -> new UserIdNotFoundException(memberID));
        member.addTournament(tournament);
        return userRepository.save(member);
    }


}
