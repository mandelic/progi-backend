package com.runtimeterror.sahisti.user.controller.dto;

import com.runtimeterror.sahisti.user.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Getter
@NoArgsConstructor
public class UserDTO {
    @NotBlank(message = "email must not be blank")
    @Pattern(regexp = "^(.+)@(\\S+)$", message = "email not in valid format")
    @Size(max = 70, message = "email exceeded char limit")
    private String email;
    @NotBlank(message = "firstname must not be blank")
    @Size(max = 30, message = "firstname exceeded char limit")
    private String firstName;
    @NotBlank(message = "lastname must not be blank")
    @Size(max = 30, message = "lastname exceeded char limit")
    private String lastName;
    @NotBlank(message = "password must not be blank")
    @Size(max = 120, message = "password exceeded char limit")
    private String password;
    @NotBlank(message = "phone number must not be blank")
    @Pattern(regexp = "[+]*[0-9]{9,}", message = "phone number not in valid format")
    @Size(max = 15, message = "phone number exceeded char limit")
    private String phoneNumber;
    @NotBlank(message = "card number must not be blank")
    @Pattern(regexp = "[0-9]{14,}", message = "card number not in valid format")
    @Size(max = 20, message = "card number exceeded char limit")
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
