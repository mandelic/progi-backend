package com.runtimeterror.sahisti.user.service;

import com.runtimeterror.sahisti.user.controller.dto.LoginDTO;
import com.runtimeterror.sahisti.user.controller.dto.TokenDTO;
import com.runtimeterror.sahisti.user.entity.User;

import java.util.List;

public interface UserService {
    List<User> findAll();
    User addUser(User user);
    TokenDTO verifyLogin(LoginDTO loginDTO);
    User findById(Long id);
    User changeRole(Long id, String role);
    User deleteUser(Long id);
    List<User> findAllDeleted();
}
