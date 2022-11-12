package com.runtimeterror.sahisti.user.service;

import com.runtimeterror.sahisti.user.controller.DTO.LoginDTO;
import com.runtimeterror.sahisti.user.controller.DTO.TokenDTO;
import com.runtimeterror.sahisti.user.entity.User;

import java.util.List;

public interface UserService {
    List<User> findAll();
    User addUser(User user);
    TokenDTO verifyLogin(LoginDTO loginDTO);
}
