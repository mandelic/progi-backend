package com.runtimeterror.sahisti.rankedList.service.impl;

import com.runtimeterror.sahisti.rankedList.repository.RankedListRepository;
import com.runtimeterror.sahisti.rankedList.service.RankedListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RankedListServiceImpl implements RankedListService {

    @Autowired
    private RankedListRepository rankedListRepository;
}
