package com.runtimeterror.sahisti.rankedList.controller;

import com.runtimeterror.sahisti.rankedList.service.RankedListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/v1/ranked-list")
@RestController
@CrossOrigin(origins = "*")
public class RankedListController {

    @Autowired
    private RankedListService rankedListService;
}
