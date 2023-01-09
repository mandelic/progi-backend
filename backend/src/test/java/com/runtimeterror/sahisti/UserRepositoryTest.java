package com.runtimeterror.sahisti;

import com.runtimeterror.sahisti.configuration.exception.UserIdNotFoundException;
import com.runtimeterror.sahisti.user.entity.User;
import com.runtimeterror.sahisti.user.repository.UserRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.Arrays;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@ExtendWith(SpringExtension.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class UserRepositoryTest {

    @Autowired
    private UserRepository userRepository;

    @BeforeEach
    void initUseCase() {
        List<User> users = Arrays.asList(
                new User("emailfejk", "ante", "antic", "password", "0919999555", "4848555544444"),
                new User("email2fejk", "ante", "antic", "password", "0919999555", "4848555544444")
                );
        userRepository.saveAll(users);
    }

    @AfterEach
    public void destroyAll() {
        userRepository.deleteAll();
    }

    @Test
    void saveAll_success() {
        List<User> users = Arrays.asList(
                new User("email3fejk", "ante", "antic", "password", "0919999555", "4848555544444"),
                new User("email4fejk", "ante", "antic", "password", "0919999555", "4848555544444"),
                new User("email5fejk", "ante", "antic", "password", "0919999555", "4848555544444")
                );
        Iterable<User> allUser = userRepository.saveAll(users);

        AtomicInteger validIdFound = new AtomicInteger();
        allUser.forEach( user -> {
            if (user.getId() > 0) {
                validIdFound.getAndIncrement();
            }
        });

        assertThat(validIdFound.intValue()).isEqualTo(3);
    }

    @Test
    void findAll_success() {
        List<User> allUser = userRepository.findAll();
        assertThat(allUser.size()).isGreaterThanOrEqualTo(2);
    }

    @Test
    void findAllByEmail_success() {
        List<User> user = userRepository.findAllByEmail("emailfejk");
        assertThat(user.size()).isGreaterThanOrEqualTo(1);
    }

    @Test
    void findAllByEmail_failed() {
        List<User> user = userRepository.findAllByEmail("emailnijefejk");
        assertThat(user.size()).isGreaterThanOrEqualTo(0);
    }

    @Test
    void deleteById_success() {
        User user1 = userRepository.findByEmail("emailfejk");
        userRepository.delete(user1);
        List<User> user2 = userRepository.findAllByEmail("emailfejk");
        assertThat(user2.size()).isEqualTo(0);
    }

}
