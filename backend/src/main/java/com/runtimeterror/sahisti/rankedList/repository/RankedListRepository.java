package com.runtimeterror.sahisti.rankedList.repository;

import com.runtimeterror.sahisti.rankedList.entity.RankedList;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RankedListRepository extends JpaRepository<RankedList, Long> {
    List<RankedList> findAllByOrderByPointsDesc();
    RankedList findByMember(Long id);
    Boolean existsByMember(Long id);
}