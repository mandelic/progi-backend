package com.runtimeterror.sahisti.transaction.controller.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class TransactionDataDTO {

    @NotBlank(message = "Adresa e-pošte je neispravnog oblika.")
    @Pattern(regexp = "^(.+)@(\\S+)$", message = "Adresa e-pošte je neispravnog oblika.")
    @Size(max = 70, message = "Adresa e-pošte premašuje zadani broj znakova.")
    private String email;

    @NotBlank(message = "Ime je neispravnog oblika.")
    @Size(max = 30, message = "Ime premašuje zadani broj znakova.")
    private String firstName;

    @NotBlank(message = "Prezime je neispravnog oblika.")
    @Size(max = 30, message = "Prezime premašuje zadani broj znakova.")
    private String lastName;

    @NotBlank(message = "Broj mobitela je neispravnog oblika.")
    @Pattern(regexp = "[+]*[0-9]{9,}", message = "Broj mobitela je neispravnog oblika.")
    @Size(max = 15, message = "Broj mobitela premašuje zadani broj znakova.")
    private String phoneNumber;

    @NotBlank(message = "Broj kartice je neispravnog oblika.")
    @Pattern(regexp = "[0-9]{14,}", message = "Broj kartice je neispravnog oblika.")
    @Size(max = 20, message = "Broj kartice premašuje zadani broj znakova.")
    private String cardNumber;

    @NotBlank(message = "Kontrolni broj kartice je neispravnog oblika.")
    @Pattern(regexp = "[0-9][0-9][0-9]", message = "Kontrolni broj kartice je neispravnog oblika.")
    @Size(max = 3, message = "Kontrolni broj kartice premašuje zadani broj znakova.")
    private String cvv;

    @NotBlank(message = "Mjesec je neispravnog oblika")
    private String month;

    @NotBlank(message = "Godina je neispravnog oblika")
    private String year;
}
