package com.runtimeterror.sahisti.transaction.controller;

import com.runtimeterror.sahisti.training.controller.dto.TrainingDTO;
import com.runtimeterror.sahisti.training.controller.dto.TrainingDetailsDTO;
import com.runtimeterror.sahisti.training.entity.Training;
import com.runtimeterror.sahisti.transaction.entity.Transaction;
import com.runtimeterror.sahisti.transaction.service.TransactionService;
import com.runtimeterror.sahisti.user.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RequestMapping("/v1/transaction")
@RestController
@CrossOrigin(origins = "*")
public class TransactionController {

    @Autowired
    private TransactionService transactionService;

    /*@PreAuthorize("hasAnyRole('ADMIN', 'MEMBER')")
    @PostMapping("/member/{id}/transaction")
    public ResponseEntity<TransactionDTO> addTransaction(@PathVariable Long id, @Valid @RequestBody TransactionDTO transactionDTO) {
        Transaction transaction = transactionService.addTransaction
        return ResponseEntity.ok(new TransactionDTO(transaction));
    }*/
}
