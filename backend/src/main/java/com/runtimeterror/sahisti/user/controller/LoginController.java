package com.runtimeterror.sahisti.user.controller;

import com.runtimeterror.sahisti.user.controller.DTO.LoginDTO;
import com.runtimeterror.sahisti.user.controller.DTO.UserDTO;
import com.runtimeterror.sahisti.user.entity.User;
import com.runtimeterror.sahisti.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RequestMapping("/v1/login")
@RestController
public class LoginController {

    @Autowired
    private UserService userService;

    @PostMapping()
    public ResponseEntity<Boolean> loginUser(@Valid @RequestBody LoginDTO loginDTO) {
        return ResponseEntity.ok().body(userService.verifyLogin(loginDTO));
    }


}
