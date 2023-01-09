package com.runtimeterror.sahisti.rankedList.controller.dto;

import com.runtimeterror.sahisti.rankedList.entity.RankedList;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class RankedListDTO {
    private Long points;
    private String member;

    public RankedListDTO(Long points, String member){
        this.points = points;
        this.member = member;
    }
}
