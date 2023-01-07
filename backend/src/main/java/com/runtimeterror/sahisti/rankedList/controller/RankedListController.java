package com.runtimeterror.sahisti.rankedList.controller;

import com.runtimeterror.sahisti.rankedList.controller.dto.RankedListDTO;
import com.runtimeterror.sahisti.rankedList.service.RankedListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RequestMapping("/v1/ranked-list")
@RestController
@CrossOrigin(origins = "*")
public class RankedListController {

    @Autowired
    private RankedListService rankedListService;

    @GetMapping
    public ResponseEntity<List<RankedListDTO>> findAll(){
        return ResponseEntity.ok(rankedListService.findAll().stream().map(RankedListDTO::new).collect(Collectors.toList()));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Integer> findPositionOfUser(@PathVariable Long id) {
        int position = rankedListService.findPositionById(id) + 1;
        if (position == 0) return ResponseEntity.status(HttpStatus.NOT_FOUND).body(-1);
        return ResponseEntity.ok(position);
    }

    @PostMapping("/{id}")
    public ResponseEntity<Integer> addUserToList(@PathVariable Long id, @RequestBody Long points) {
        int position = rankedListService.addUserToList(id, points) + 1;
        if (position == 0) return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(-1);
        return ResponseEntity.ok(position);
    }

}
