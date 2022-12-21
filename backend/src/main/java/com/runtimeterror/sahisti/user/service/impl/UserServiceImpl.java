package com.runtimeterror.sahisti.user.service.impl;

import com.runtimeterror.sahisti.configuration.exception.UserIdNotFoundException;
import com.runtimeterror.sahisti.user.controller.dto.LoginDTO;
import com.runtimeterror.sahisti.user.controller.dto.TokenDTO;
import com.runtimeterror.sahisti.user.entity.User;
import com.runtimeterror.sahisti.user.repository.UserRepository;
import com.runtimeterror.sahisti.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

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

    public TokenDTO verifyLogin(LoginDTO loginDTO) {
        if (userRepository.existsByEmail(loginDTO.getEmail())){
            User user = userRepository.findByEmail(loginDTO.getEmail());
            if (passwordEncoder.matches(loginDTO.getPassword(), user.getPassword())) return new TokenDTO("User authenticated.", user.getRole(), "", user.getId());
        }
        return new TokenDTO("Wrong email or password.", "", "", null);
    }

    public User findById(Long id) {
        System.out.println(userRepository.findAll());
        return userRepository.findById(id).orElseThrow(() -> new UserIdNotFoundException(id));
    }

}
