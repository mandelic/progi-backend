package com.runtimeterror.sahisti.user.repository;

import com.runtimeterror.sahisti.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    public User findByEmail(String email);
    public Boolean existsByEmail(String email);
    List<User> findAllByEmail(String email);
}
