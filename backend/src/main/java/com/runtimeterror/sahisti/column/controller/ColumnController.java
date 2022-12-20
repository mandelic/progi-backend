package com.runtimeterror.sahisti.column.controller;

import com.runtimeterror.sahisti.column.service.ColumnService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/v1/column")
@RestController
@CrossOrigin(origins = "*")
public class ColumnController {

    @Autowired
    private ColumnService columnService;
}
