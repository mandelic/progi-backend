package com.runtimeterror.sahisti.column.controller;

import com.runtimeterror.sahisti.column.controller.dto.ColumnDTO;
import com.runtimeterror.sahisti.column.entity.Column;
import com.runtimeterror.sahisti.column.service.ColumnService;
import com.runtimeterror.sahisti.user.controller.dto.UserDTO;
import com.runtimeterror.sahisti.user.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RequestMapping("/v1/column")
@RestController
@CrossOrigin(origins = "*")
public class ColumnController {

    @Autowired
    private ColumnService columnService;

    @GetMapping
    public ResponseEntity<List<ColumnDTO>> findAll() {
        return ResponseEntity.ok(columnService.findAll().stream().map(column -> new ColumnDTO(column)).collect(Collectors.toList()));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ColumnDTO> findById(@PathVariable Long id) {
        return ResponseEntity.ok(new ColumnDTO(columnService.findById(id)));
    }

    @PreAuthorize("hasAnyRole('ADMIN')")
    @PostMapping
    public ResponseEntity<ColumnDTO> addColumn(@Valid @RequestBody ColumnDTO columnDTO) {
        Column newColumn = columnService.addColumn(new Column(columnDTO.getTitle()));
        return ResponseEntity.status(HttpStatus.CREATED).body(new ColumnDTO(newColumn));
    }
}
