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

}
