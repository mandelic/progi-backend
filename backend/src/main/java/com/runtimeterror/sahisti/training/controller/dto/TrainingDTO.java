package com.runtimeterror.sahisti.training.controller.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter @Setter @AllArgsConstructor @NoArgsConstructor
public class TrainingDTO {
    private LocalDateTime date;
    private String location;
    private Long duration;
    private Long memberId;
}
