package com.runtimeterror.sahisti.user.entity;

import com.runtimeterror.sahisti.news.entity.News;
import com.runtimeterror.sahisti.rankedList.entity.RankedList;
import com.runtimeterror.sahisti.tournament.entity.Tournament;
import com.runtimeterror.sahisti.training.entity.Training;
import com.runtimeterror.sahisti.transaction.entity.Transaction;
import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "users",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "email")
        })
@Getter @Setter @NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @NotBlank(message = "email must not be blank")
    @Size(max = 70)
    String email;

    @NotBlank(message = "first name must not be blank")
    @Size(max = 30)
    String firstName;

    @NotBlank(message = "last name must not be blank")
    @Size(max = 30)
    String lastName;

    @NotBlank(message = "password must not be blank")
    @Size(max = 120)
    String password;


    @NotBlank(message = "phone number must not be blank")
    @Size(max = 30)
    String phoneNumber;

    @NotBlank(message = "card number must not be blank")
    @Size(max = 30)
    String cardNumber;

    @OneToMany(mappedBy="author")
    Set<News> news;

    @OneToOne(mappedBy="user")
    Transaction transaction;

    @ManyToMany
    @JoinTable(
            name = "training_member",
            joinColumns = @JoinColumn(name = "member_id"),
            inverseJoinColumns = @JoinColumn(name = "training_id")
    )
    Set<Training> trainings = new HashSet<>();

    @ManyToMany
    @JoinTable(
            name = "tournament_members",
            joinColumns = @JoinColumn(name = "member_id"),
            inverseJoinColumns = @JoinColumn(name = "tournament_id")
    )
    Set<Tournament> tournaments = new HashSet<>();

    private String role;

    public User(String email, String firstName, String lastName, String password, String phoneNumber, String cardNumber) {
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.cardNumber = cardNumber;
        this.role = "ROLE_MEMBER";
    }

    public void addTraining(Training training) {
        this.trainings.add(training);
        training.getMembers().add(this);
    }

    public void addTournament(Tournament tournament) {
        this.tournaments.add(tournament);
        tournament.getMembers().add(this);
    }

    public void removeTraining(Long trainingId) {
        Training training = this.trainings.stream().filter(b -> b.getId() == trainingId).findFirst().orElse(null);
        if (training != null) {
            this.trainings.remove(training);
            training.getMembers().remove(this);
        }
    }


}