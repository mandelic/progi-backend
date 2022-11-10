package com.runtimeterror.sahisti.user.controller.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor @Getter
@Setter
@AllArgsConstructor
public class LoginDTO {

    private String email;
    private String password;

}
