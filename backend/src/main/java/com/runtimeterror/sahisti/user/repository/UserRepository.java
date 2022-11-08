package com.runtimeterror.sahisti.user.repository;

import com.runtimeterror.sahisti.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
