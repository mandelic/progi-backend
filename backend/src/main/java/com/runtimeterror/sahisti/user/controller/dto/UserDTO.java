package com.runtimeterror.sahisti.user.controller.dto;

import com.runtimeterror.sahisti.user.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Getter
@NoArgsConstructor
public class UserDTO {
    @NotBlank(message = "email must not be blank")
    @Size(max = 70)
    private String email;
    @NotBlank(message = "first name must not be blank")
    @Size(max = 30)
    private String firstName;
    @NotBlank(message = "last name must not be blank")
    @Size(max = 30)
    private String lastName;
    @NotBlank(message = "password must not be blank")
    @Size(max = 120)
    private String password;
    @NotBlank(message = "phone number must not be blank")
    @Size(max = 30)
    private String phoneNumber;
    @NotBlank(message = "card number must not be blank")
    @Size(max = 30)
    private String cardNumber;

    public UserDTO(User user) {
        this.email = user.getEmail();
        this.firstName = user.getFirstName();
        this.lastName = user.getLastName();
        this.password = user.getPassword();
        this.phoneNumber = user.getPhoneNumber();
        this.cardNumber = user.getCardNumber();
    }
}
