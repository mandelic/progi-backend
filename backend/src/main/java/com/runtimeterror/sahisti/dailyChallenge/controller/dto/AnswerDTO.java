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
    @Pattern(regexp = "[A-H][1-8]", message = "Položaj je u polju a-h, 1-8.")
    @Size(max = 2, message = "Položaj zahtjeva slovo i broj polja.")
    private String startingPosition;

    @Pattern(regexp = "[A-H][1-8]", message = "Položaj je u polju a-h, 1-8.")
    @Size(max = 2, message = "Položaj zahtjeva slovo i broj polja.")
    private String endingPosition;
}
