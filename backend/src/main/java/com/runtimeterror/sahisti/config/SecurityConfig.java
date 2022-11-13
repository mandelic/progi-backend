package com.runtimeterror.sahisti.config;

import com.runtimeterror.sahisti.security.JwtAuthFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true, jsr250Enabled = true)
public class SecurityConfig {


    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{
        http.cors().and().csrf().disable()
                .addFilterAfter(new JwtAuthFilter(), UsernamePasswordAuthenticationFilter.class)
                .authorizeRequests((auth) ->
                        auth
                            .antMatchers(HttpMethod.POST, "/api/v1/login").permitAll()
                            .anyRequest().permitAll()
                        )
                .httpBasic(withDefaults());
        return http.build();
    }

}