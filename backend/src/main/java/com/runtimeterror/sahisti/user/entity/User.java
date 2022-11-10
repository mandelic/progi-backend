package com.runtimeterror.sahisti.user.entity;

import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @NotNull
    String email;

    @NotNull
    String firstName;

    @NotNull
    String lastName;

    @NotNull
    String password;

    String phoneNumber;

    @NotNull
    String cardNumber;

    @NotNull
    String roles;

    public User(String email, String firstName, String lastName, String password, String phoneNumber, String cardNumber) {
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.cardNumber = cardNumber;
    }
}
