package com.runtimeterror.sahisti.training.service.impl;

import com.runtimeterror.sahisti.configuration.exception.EntityIdNotFoundException;
import com.runtimeterror.sahisti.configuration.exception.UserIdNotFoundException;
import com.runtimeterror.sahisti.training.entity.Training;
import com.runtimeterror.sahisti.training.repository.TrainingRepository;
import com.runtimeterror.sahisti.training.service.TrainingService;
import com.runtimeterror.sahisti.user.entity.User;
import com.runtimeterror.sahisti.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class TrainingServiceImpl implements TrainingService {

    @Autowired
    private TrainingRepository trainingRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<Training> findAllRelevant() {
        userRepository.findAll();
        return trainingRepository.findAllByVisibleAndDateAfter(true, LocalDateTime.now());
    }

    @Override
    public List<Training> findAllByUserId(Long id) {
        userRepository.findAll();
        List<Training> criteriaTraining = trainingRepository.findAllByVisibleAndDateAfter(true, LocalDateTime.now());
        if (!userRepository.existsById(id)) throw new UserIdNotFoundException(id);
        List<Training> byUserTraining = trainingRepository.findAllByUserId(id);
        return criteriaTraining.stream().filter(byUserTraining::contains).collect(Collectors.toList());
    }

    @Override
    public Training addTraining(Training training) {
        return trainingRepository.save(training);
    }

    @Override
    public User addMember(Long id, Long memberId) {
        Training training = trainingRepository.findById(id).orElseThrow(() -> new EntityIdNotFoundException("Training", id));
        if (training.getVisible() == false) throw new EntityIdNotFoundException("Training", id);
        System.out.println(userRepository.findAll());
        User member = userRepository.findById(memberId).orElseThrow(() -> new UserIdNotFoundException(memberId));
        member.addTraining(training);
        return userRepository.save(member);
    }

    @Override
    public Training removeTraining(Long id) {
        Training training = trainingRepository.findById(id).orElseThrow(() -> new EntityIdNotFoundException("Training", id));
        training.setVisible(false);
        return trainingRepository.save(training);
    }
}
