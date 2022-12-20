package com.runtimeterror.sahisti.rankedList.repository;

import com.runtimeterror.sahisti.rankedList.entity.RankedList;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RankedListRepository extends JpaRepository<RankedList, Long> {

}