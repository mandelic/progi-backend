package com.runtimeterror.sahisti.user.service.impl;

import com.runtimeterror.sahisti.configuration.exception.CustomMessageException;
import com.runtimeterror.sahisti.configuration.exception.UserIdNotFoundException;
import com.runtimeterror.sahisti.user.controller.dto.LoginDTO;
import com.runtimeterror.sahisti.user.controller.dto.TokenDTO;
import com.runtimeterror.sahisti.user.entity.User;
import com.runtimeterror.sahisti.user.repository.UserRepository;
import com.runtimeterror.sahisti.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public List<User> findAll() {
        List<User> all = userRepository.findAll();
        all.removeAll(userRepository.findAllByRole("ROLE_DELETED"));
        return all;
    }

    public List<User> findAllDeleted() {
        return userRepository.findAllByRole("ROLE_DELETED");
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

    @Override
    public User changeRole(Long id, String role) {
        User user = userRepository.findById(id).orElseThrow(() -> new UserIdNotFoundException(id));
        List<String> roles = Arrays.asList("ROLE_SENSEI", "ROLE_MEMBER", "ROLE_ADMIN", "ROLE_UNPAID");
        if (!roles.contains(role)) throw new CustomMessageException("Role does not exist.");
        user.setRole(role);
        return userRepository.save(user);
    }

    @Override
    public User deleteUser(Long id) {
        User user = userRepository.findById(id).orElseThrow(() -> new UserIdNotFoundException(id));
        user.setRole("ROLE_DELETED");
        return userRepository.save(user);
    }

}
