package com.runtimeterror.sahisti.dailyChallenge.controller.dto;

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
    private Float grade;
}

