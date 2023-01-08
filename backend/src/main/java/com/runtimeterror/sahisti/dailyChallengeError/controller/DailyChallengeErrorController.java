package com.runtimeterror.sahisti.dailyChallengeError.controller;

import com.electronwill.nightconfig.core.conversion.Path;
import com.runtimeterror.sahisti.dailyChallengeError.controller.dto.DceDTO;
import com.runtimeterror.sahisti.dailyChallengeError.controller.dto.DceDetailsDTO;
import com.runtimeterror.sahisti.dailyChallengeError.service.DailyChallengeErrorService;
import com.runtimeterror.sahisti.news.entity.DailyChallengeError;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RequestMapping("/v1/daily-challenge-error")
@RestController
@CrossOrigin(origins = "*")
public class DailyChallengeErrorController {

    @Autowired
    private DailyChallengeErrorService dailyChallengeErrorService;

    @PreAuthorize("hasAnyRole('MEMBER', 'ADMIN')")
    @PostMapping("/member/{userId}/dc/{dcId}")
    public ResponseEntity<DceDetailsDTO> sendDCError(@PathVariable Long userId, @PathVariable Long dcId, @RequestBody DceDTO dceDTO) {
        return ResponseEntity.ok(new DceDetailsDTO(dailyChallengeErrorService.createNewTicket(userId, dcId, dceDTO.getSolution(), dceDTO.getDescription())));
    }

    @PreAuthorize("hasAnyRole('SENSEI', 'ADMIN')")
    @GetMapping("/unchecked")
    public ResponseEntity<List<DceDetailsDTO>> getAllUnchecked() {
        return ResponseEntity.ok(dailyChallengeErrorService.getAllUnchecked().stream().map(DceDetailsDTO::new).collect(Collectors.toList()));
    }

}
