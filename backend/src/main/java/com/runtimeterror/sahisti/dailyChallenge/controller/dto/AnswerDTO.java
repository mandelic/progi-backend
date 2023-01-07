package com.runtimeterror.sahisti.ChessGame.controller.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@NoArgsConstructor @Getter
@Setter
@AllArgsConstructor
public class AnswerDTO {
    @Pattern(regexp = "[A-Ha-h][1-8][A-Ha-h][1-8]", message = "Unesite početni i krajnji položaj. Položaj je u polju a-h, 1-8.")
    @Size(max = 4, message = "Položaj zahtjeva slovo i broj polja.")
    private String move;
}
