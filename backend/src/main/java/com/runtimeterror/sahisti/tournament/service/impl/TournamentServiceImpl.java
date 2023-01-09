package com.runtimeterror.sahisti.tournament.service.impl;

import com.runtimeterror.sahisti.configuration.exception.EntityIdNotFoundException;
import com.runtimeterror.sahisti.configuration.exception.UserIdNotFoundException;
import com.runtimeterror.sahisti.tournament.entity.Tournament;
import com.runtimeterror.sahisti.tournament.repository.TournamentRepository;
import com.runtimeterror.sahisti.tournament.service.TournamentService;
import com.runtimeterror.sahisti.training.entity.Training;
import com.runtimeterror.sahisti.user.entity.User;
import com.runtimeterror.sahisti.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

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
    public Tournament findById(Long id) {
        return tournamentRepository.findById(id).orElseThrow();
    }

    @Override
    public List<Tournament> findAllVisibile() {
        userRepository.findAll();
        return tournamentRepository.findAllByVisibleAndDateAfter(true, LocalDateTime.now());
    }

    @Override
    public List<Tournament> findAllByUserID(Long id) {
        userRepository.findAll();
        List<Tournament> criteriaTournament = tournamentRepository.findAllByVisibleAndDateAfter(true, LocalDateTime.now());
        if (!userRepository.existsById(id)) throw new UserIdNotFoundException(id);
        List<Tournament> byUserTournament = tournamentRepository.findAllByUserId(id);
        return criteriaTournament.stream().filter(byUserTournament::contains).collect(Collectors.toList());
    }

    @Override
    public User addMember(Long id, Long memberID) {
        Tournament tournament = tournamentRepository.findById(id).orElseThrow(() -> new EntityIdNotFoundException("Tournament", id));
        if (tournament.getVisible() == false) throw new EntityIdNotFoundException("Tournament", id);
        System.out.println(userRepository.findAll());
        User member = userRepository.findById(memberID).orElseThrow(() -> new UserIdNotFoundException(memberID));
        member.addTournament(tournament);
        return userRepository.save(member);
    }

    @Override
    public Tournament removeTournament(Long id) {
        Tournament tournament = tournamentRepository.findById(id).orElseThrow(() -> new EntityIdNotFoundException("Tournament", id));
        tournament.setVisible(false);
        return tournamentRepository.save(tournament);
    }


}
