package com.runtimeterror.sahisti.training.controller;

import com.runtimeterror.sahisti.training.controller.dto.TrainingDTO;
import com.runtimeterror.sahisti.training.controller.dto.TrainingDetailsDTO;
import com.runtimeterror.sahisti.training.entity.Training;
import com.runtimeterror.sahisti.training.service.TrainingService;
import com.runtimeterror.sahisti.user.entity.User;
import com.runtimeterror.sahisti.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RequestMapping("/v1")
@RestController
@CrossOrigin(origins = "*")
public class CoachTrainingController {

    @Autowired
    private TrainingService trainingService;

    @Autowired
    private UserService userService;

    @PreAuthorize("hasAnyRole('ADMIN', 'SENSEI')")
    @PostMapping("/coach/{id}/training")
    public ResponseEntity<TrainingDetailsDTO> addTraining(@PathVariable Long id, @Valid @RequestBody TrainingDTO trainingDTO) {
        User coach = userService.findById(id);
        Training training = trainingService.addTraining(new Training(trainingDTO.getDate(), trainingDTO.getLocation(), trainingDTO.getDuration(), coach));
        return ResponseEntity.ok(new TrainingDetailsDTO(training));
    }

    @PreAuthorize("hasAnyRole('ADMIN', 'SENSEI')")
    @GetMapping("/coach/{id}/training")
    public ResponseEntity<List<TrainingDetailsDTO>> getTrainingByTrainer(@PathVariable Long id) {
        List<Training> trainingList = trainingService.findAllByCoachId(id);
        return ResponseEntity.ok(trainingList.stream().map(TrainingDetailsDTO::new).collect(Collectors.toList()));
    }
}
