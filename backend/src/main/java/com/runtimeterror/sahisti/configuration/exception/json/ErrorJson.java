package com.runtimeterror.sahisti.configuration.exception.json;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data @AllArgsConstructor
public class ErrorJson {

    private String path;
    private String message;

}