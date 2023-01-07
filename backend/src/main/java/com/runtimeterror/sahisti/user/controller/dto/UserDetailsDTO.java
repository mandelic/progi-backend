package com.runtimeterror.sahisti.user.controller.dto;

import com.runtimeterror.sahisti.tournament.controller.dto.TournamentDetailsDTO;
import com.runtimeterror.sahisti.tournament.entity.Tournament;
import com.runtimeterror.sahisti.training.controller.dto.TrainingDetailsDTO;
import com.runtimeterror.sahisti.training.entity.Training;
import com.runtimeterror.sahisti.user.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
import java.util.stream.Collectors;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDetailsDTO {
    Long id;
    private String email;
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private List<Training> trainings;
    private List<Tournament> tournaments;
    private String role;

    public UserDetailsDTO(User user) {
        this.id = user.getId();
        this.email = user.getEmail();
        this.firstName = user.getFirstName();
        this.lastName = user.getLastName();
        this.phoneNumber = user.getPhoneNumber();
        this.trainings = user.getTrainings().stream().toList();
        this.tournaments = user.getTournaments().stream().toList();
        this.role = user.getRole();
    }

    public List<TrainingDetailsDTO> getTrainings() {
        return trainings.stream().map(TrainingDetailsDTO::new).collect(Collectors.toList());
    }

    public List<TournamentDetailsDTO> getTournaments() {
        return tournaments.stream().map(TournamentDetailsDTO::new).collect(Collectors.toList());
    }


}
