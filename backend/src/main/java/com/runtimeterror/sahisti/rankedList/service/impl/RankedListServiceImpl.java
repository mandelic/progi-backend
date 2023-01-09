package com.runtimeterror.sahisti.rankedList.service.impl;

import com.runtimeterror.sahisti.configuration.exception.UserIdNotFoundException;
import com.runtimeterror.sahisti.rankedList.controller.dto.RankedListDTO;
import com.runtimeterror.sahisti.rankedList.entity.RankedList;
import com.runtimeterror.sahisti.rankedList.repository.RankedListRepository;
import com.runtimeterror.sahisti.rankedList.service.RankedListService;
import com.runtimeterror.sahisti.user.entity.User;
import com.runtimeterror.sahisti.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class RankedListServiceImpl implements RankedListService {

    @Autowired
    private RankedListRepository rankedListRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<RankedListDTO> findAll() {

        return rankedListRepository.findAllByOrderByPointsDesc().stream().map(rl -> {
            User member = userRepository.findById(rl.getMember()).orElseThrow(() -> new UserIdNotFoundException(rl.getMember()));
            return new RankedListDTO(rl.getPoints(), member.getFirstName() + " " + member.getLastName());
        }).collect(Collectors.toList());
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
