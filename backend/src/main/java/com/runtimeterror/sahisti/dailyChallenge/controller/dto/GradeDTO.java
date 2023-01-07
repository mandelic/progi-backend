package com.runtimeterror.sahisti.dailyChallenge.controller.dto;

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
public class GradeDTO {
    @Pattern(regexp = "[1-5]", message = "Ocijeni dnevnu taktiku ocijenom 1-5")
    @Size(max = 1, message = "Unesite numeričku vrijednost ocjene.")
    private int grade;
}

