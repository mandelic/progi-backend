package com.runtimeterror.sahisti.dailyChallengeError.controller.dto;

import com.runtimeterror.sahisti.news.entity.DailyChallengeError;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class DceDetailsDTO {
    private Long id;

    private String solution;

    private String description;

    private Long memberId;

    private Long dailyChallengeId;

    private Boolean checked;

    private Boolean valid;

    public DceDetailsDTO(DailyChallengeError dce) {
        this.id = dce.getId();
        this.solution = dce.getSolution();
        this.description = dce.getDescription();
        this.memberId = dce.getMember().getId();
        this.dailyChallengeId = dce.getDailyChallenge().getId();
        this.checked = dce.getChecked();
        this.valid = dce.getValid();
    }
}
