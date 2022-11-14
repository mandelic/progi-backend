package com.runtimeterror.sahisti.exception;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class UserIdNotFoundException extends RuntimeException{
    private String message;

    public UserIdNotFoundException(Long id) { message = "User with ID: " + id + " not found.";}
}
