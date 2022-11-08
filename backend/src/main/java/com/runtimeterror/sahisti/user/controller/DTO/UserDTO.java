package com.runtimeterror.sahisti.user.controller.DTO;

import com.runtimeterror.sahisti.user.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class UserDTO {

    private String email;
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private String cardNumber;

    public UserDTO(User user) {
        this.email = user.getEmail();
        this.firstName = user.getFirstName();
        this.lastName = user.getLastName();
        this.phoneNumber = user.getPhoneNumber();
        this.cardNumber = user.getCardNumber();
    }
}
