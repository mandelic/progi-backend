package com.runtimeterror.sahisti.rankedList.service.impl;

import com.runtimeterror.sahisti.rankedList.entity.RankedList;
import com.runtimeterror.sahisti.rankedList.repository.RankedListRepository;
import com.runtimeterror.sahisti.rankedList.service.RankedListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RankedListServiceImpl implements RankedListService {

    @Autowired
    private RankedListRepository rankedListRepository;

    @Override
    public List<RankedList> findAll() {
        return rankedListRepository.findAllByOrderByPointsDesc();
    }

    @Override
    public int findPositionById(Long id) {
        List<RankedList> list = rankedListRepository.findAllByOrderByPointsDesc();
        RankedList listById = rankedListRepository.findByMember(id);
        return list.indexOf(listById);
    }

    @Override
    public int addUserToList(Long id, Long points) {
        if (rankedListRepository.existsByMember(id)) return -1;
        rankedListRepository.save(new RankedList(points, id));
        List<RankedList> list = rankedListRepository.findAllByOrderByPointsDesc();
        RankedList listById = rankedListRepository.findByMember(id);
        return list.indexOf(listById);
    }
}
