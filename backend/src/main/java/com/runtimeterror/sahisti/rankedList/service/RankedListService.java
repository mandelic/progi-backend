package com.runtimeterror.sahisti.rankedList.service;

import com.runtimeterror.sahisti.rankedList.entity.RankedList;

import java.util.List;

public interface RankedListService {

    List<RankedList> findAll();

    int findPositionById(Long id);

    int addUserToList(Long id, Long points);
}