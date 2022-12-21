package com.runtimeterror.sahisti.user.controller;

import com.runtimeterror.sahisti.user.controller.dto.UserDTO;
import com.runtimeterror.sahisti.user.controller.dto.UserDetailsDTO;
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

@RequestMapping("/v1/users")
@RestController
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserService userService;

    @PreAuthorize("hasRole('MEMBER')")
    @GetMapping
    public ResponseEntity<List<UserDTO>> findAll() {
        return ResponseEntity.ok(userService.findAll().stream().map(UserDTO::new).collect(Collectors.toList()));
    }

    @PreAuthorize("hasRole('MEMBER')")
    @GetMapping("/{id}")
    public ResponseEntity<UserDetailsDTO> findById(@PathVariable Long id) {
        return ResponseEntity.ok(new UserDetailsDTO(userService.findById(id)));
    }


    @PostMapping
    public ResponseEntity<UserDTO> addUser(@Valid @RequestBody UserDTO userDTO) {
        User newUser = userService.addUser(new User(userDTO.getEmail(), userDTO.getFirstName(), userDTO.getLastName(), userDTO.getPassword(), userDTO.getPhoneNumber(), userDTO.getCardNumber()));
        return ResponseEntity.status(HttpStatus.CREATED).body(new UserDTO(newUser));
    }

}
