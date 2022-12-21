package com.runtimeterror.sahisti.user.controller.dto;

import com.runtimeterror.sahisti.user.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDetailsDTO {
    private String email;
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private String role;

    public UserDetailsDTO(User user) {
        this.email = user.getEmail();
        this.firstName = user.getFirstName();
        this.lastName = user.getLastName();
        this.phoneNumber = user.getPhoneNumber();
        this.role = user.getRole();
    }
}
