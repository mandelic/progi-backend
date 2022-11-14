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
    @Pattern(regexp = "^(.+)@(\\S+)$", message = "Adresa e-pošte je neispravnog oblika.")
    @Size(max = 70, message = "Adresa e-pošte premašuje zadani broj znakova.")
    private String email;
    @NotBlank(message = "Ime je neispravnog oblika.")
    @Size(max = 30, message = "Ime premašuje zadani broj znakova.")
    private String firstName;
    @NotBlank(message = "Prezime je neispravnog oblika.")
    @Size(max = 30, message = "Prezime premašuje zadani broj znakova.")
    private String lastName;
    @NotBlank(message = "Lozinka je neispravnog oblika.")
    @Size(max = 120, message = "Lozinka premašuje zadani broj znakova.")
    private String password;
    @Pattern(regexp = "[+]*[0-9]{9,}", message = "Broj mobitela je neispravnog oblika.")
    @Size(max = 15, message = "Broj mobitela premašuje zadani broj znakova.")
    private String phoneNumber;
    @Pattern(regexp = "[0-9]{14,}", message = "Broj kartice je neispravnog oblika.")
    @Size(max = 20, message = "Broj kartice premašuje zadani broj znakova.")
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
