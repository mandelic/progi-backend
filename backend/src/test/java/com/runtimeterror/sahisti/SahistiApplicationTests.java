package com.runtimeterror.sahisti;

import com.runtimeterror.sahisti.column.entity.Column;
import com.runtimeterror.sahisti.news.entity.News;
import com.runtimeterror.sahisti.news.repository.NewsRepository;
import com.runtimeterror.sahisti.news.service.NewsService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.runtimeterror.sahisti.user.repository.UserRepository;
import com.runtimeterror.sahisti.user.service.UserService;

import com.runtimeterror.sahisti.user.entity.User;

import java.time.LocalDateTime;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.mockito.Mockito.when;

@SpringBootTest
class SahistiApplicationTests {

	@Autowired
	private UserService userService;

	@Autowired
	private NewsService newsService;

	@MockBean
	private UserRepository userRepository;
	@MockBean
	private NewsRepository newsRepository;


	@Test
	public void getUsersTest() {
		when(userRepository.findAll()).thenReturn(Stream.of(
				new User("marko.markic@gmail.com","marko","markic", "password",
						"0955877881", "1009548412151515"),
				new User("ante.simic@gmail.com","ante","simic", "salsa", "09878785423", "1158765420112215"),
				new User("josip.jukic@gmail.com","josip","jukic", "domena", "0997456287", "1358765490522217")
		).collect(Collectors.toList()));
		Assertions.assertEquals(3, userService.findAll().size());
	}

	@Test
	public void addUserTest() {
		User user = new User("marko.markic@gmail.com","marko","markic",
				"password", "0955877881", "1009548412151515");
		when(userRepository.save(user)).thenReturn(user);
		Assertions.assertEquals(user, userService.addUser(user));
	}

	@Test
	public void getNewsTest() {
		when(newsRepository.findAll()).thenReturn(Stream.of(
				new News(LocalDateTime.of(2023,2,1,12,00),
						"Pobjednik turnira","...",new User("josip.jukic@gmail.com",
						"josip","jukic", "domena", "0997456287", "1358765490522217"),
						new Column("turniri")),
				new News(LocalDateTime.of(2023,1,1,12,00),"Prvenstvo u sahu","...",new User("josip.jukic@gmail.com","josip","jukic", "domena", "0997456287", "1358765490522217"),new Column("Sah Novosti"))
		).collect(Collectors.toList()));
		Assertions.assertEquals(2, newsService.findAll().size());
	}

}
