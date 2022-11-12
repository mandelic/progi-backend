package com.runtimeterror.sahisti.user.controller.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class TokenDTO {
    private String message;
    private String role;
    private String token;
}
