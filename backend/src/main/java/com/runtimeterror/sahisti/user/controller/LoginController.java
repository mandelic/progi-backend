package com.runtimeterror.sahisti.user.controller;

import com.runtimeterror.sahisti.user.controller.DTO.LoginDTO;
import com.runtimeterror.sahisti.user.controller.DTO.TokenDTO;
import com.runtimeterror.sahisti.user.controller.DTO.UserDTO;
import com.runtimeterror.sahisti.user.entity.User;
import com.runtimeterror.sahisti.user.service.UserService;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@RequestMapping("/v1/login")
@RestController
@CrossOrigin(origins = "*")
public class LoginController {

    @Autowired
    private UserService userService;

    @PostMapping()
    public ResponseEntity<TokenDTO> loginUser(@Valid @RequestBody LoginDTO loginDTO) {
        TokenDTO tokenDTO = userService.verifyLogin(loginDTO);
        if (tokenDTO.getMessage().equals("Wrong email or password.")) return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(tokenDTO);
        String token = getJWTToken(loginDTO.getEmail(), tokenDTO.getRole());
        tokenDTO.setToken(token);
        return ResponseEntity.status(HttpStatus.OK).body(tokenDTO);
    }

    private String getJWTToken(String username, String role) {
        List<GrantedAuthority> grantedAuthorities = AuthorityUtils
                .commaSeparatedStringToAuthorityList(role);

        String token = Jwts
                .builder()
                .setId("sahistiJWT")
                .setSubject(username)
                .claim("authorities",
                        grantedAuthorities
                                .stream()
                                .map(GrantedAuthority::getAuthority)
                                .collect(Collectors.toList()))
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1800000))
                .signWith(SignatureAlgorithm.HS256,
                        "sahistiSecretKey".getBytes()).compact();

        return "Bearer " + token;
    }


}
