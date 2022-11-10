package com.runtimeterror.sahisti.user.service.impl;

import com.runtimeterror.sahisti.user.controller.DTO.LoginDTO;
import com.runtimeterror.sahisti.user.entity.User;
import com.runtimeterror.sahisti.user.repository.UserRepository;
import com.runtimeterror.sahisti.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public User addUser(User user) {
        String encodedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);
        return userRepository.save(user);
    }

    public Boolean verifyLogin(LoginDTO loginDTO) {
        if (userRepository.existsByEmail(loginDTO.getEmail())){
            User user = userRepository.findByEmail(loginDTO.getEmail());
            if (passwordEncoder.matches(loginDTO.getPassword(), user.getPassword())) return true;
            return false;
        }
        return false;
    }

}
