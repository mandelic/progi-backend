package com.runtimeterror.sahisti.training.controller;

import com.runtimeterror.sahisti.training.controller.dto.TrainingDTO;
import com.runtimeterror.sahisti.training.controller.dto.TrainingDetailsDTO;
import com.runtimeterror.sahisti.training.entity.Training;
import com.runtimeterror.sahisti.training.service.TrainingService;
import com.runtimeterror.sahisti.user.controller.dto.UserDetailsDTO;
import com.runtimeterror.sahisti.user.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RequestMapping("/v1/training")
@RestController
@CrossOrigin(origins = "*")
public class TrainingController {

    @Autowired
    private TrainingService trainingService;

    @GetMapping
    public ResponseEntity<List<TrainingDetailsDTO>> findAll() {
        return ResponseEntity.ok(trainingService.findAllRelevant().stream().map(TrainingDetailsDTO::new).collect(Collectors.toList()));
    }

    @GetMapping("/{id}/applied")
    public ResponseEntity<List<TrainingDetailsDTO>> findAllByUserId(@PathVariable Long id) {
        return ResponseEntity.ok(trainingService.findAllByUserId(id).stream().map(TrainingDetailsDTO::new).collect(Collectors.toList()));
    }

    @GetMapping("/{id}/not-applied")
    public ResponseEntity<List<TrainingDetailsDTO>> findAllByUserIdNotApplied(@PathVariable Long id) {
        List<Training> allRelevant= trainingService.findAllRelevant();
        List<Training> allByUserId= trainingService.findAllByUserId(id);
        allRelevant = allRelevant.stream().filter(training -> !allByUserId.contains(training)).collect(Collectors.toList());
        return ResponseEntity.ok(allRelevant.stream().map(TrainingDetailsDTO::new).collect(Collectors.toList()));
    }

    @PostMapping("/{id}/member")
    public ResponseEntity<UserDetailsDTO> addMember(@PathVariable Long id, @RequestBody Long memberId) {
        User user = trainingService.addMember(id, memberId);
        return ResponseEntity.status(HttpStatus.CREATED).body(new UserDetailsDTO(user));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<TrainingDetailsDTO> deleteTraining(@PathVariable Long id) {
        return ResponseEntity.ok(new TrainingDetailsDTO(trainingService.removeTraining(id)));
    }

}