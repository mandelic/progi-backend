package com.runtimeterror.sahisti.dailyChallenge.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RequestMapping("/v1/chessgame")
@RestController
@CrossOrigin(origins = "*")
public class ChessGameController {

    @Autowired
    private ChessGame chessGame;

    @PostMapping()
        return ResponseEntity.status(HttpStatus.OK).body(tokenDTO);
}

    private String getJWTToken(String username, String role) {

    }


}

