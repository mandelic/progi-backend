package com.runtimeterror.sahisti.transaction.controller;

import com.runtimeterror.sahisti.news.controller.dto.TransactionDTO;
import com.runtimeterror.sahisti.transaction.controller.dto.TransactionDataDTO;
import com.runtimeterror.sahisti.transaction.controller.dto.TransactionDetailsDTO;
import com.runtimeterror.sahisti.transaction.entity.Transaction;
import com.runtimeterror.sahisti.transaction.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RequestMapping("/v1/transaction")
@RestController
@CrossOrigin(origins = "*")
public class TransactionController {

    @Autowired
    private TransactionService transactionService;

    @PreAuthorize("hasAnyRole('ADMIN', 'MEMBER', 'UNPAID')")
    @PostMapping("/member/{id}")
    public ResponseEntity<TransactionDTO> addTransaction(@PathVariable Long id, @Valid @RequestBody TransactionDataDTO transactionDataDTO) {
        Transaction transaction = transactionService.addTransaction(transactionDataDTO.getMonth(), transactionDataDTO.getYear(), id);
        return ResponseEntity.ok(new TransactionDTO(transaction));
    }

    @PreAuthorize("hasAnyRole('ADMIN', 'MEMBER')")
    @GetMapping("/member/{id}")
    public ResponseEntity<List<TransactionDTO>> getTransactionsById(@PathVariable Long id) {
        return ResponseEntity.ok(transactionService.getByMemberId(id).stream().map(TransactionDTO::new).collect(Collectors.toList()));
    }

    @PreAuthorize("hasAnyRole('ADMIN')")
    @GetMapping
    public ResponseEntity<List<TransactionDetailsDTO>> getAllTransactions() {
        return ResponseEntity.ok(transactionService.getAll().stream().map(TransactionDetailsDTO::new).collect(Collectors.toList()));
    }

    @GetMapping("/unpaid")
    public ResponseEntity<List<Long>> getAllUnpaidTransactions() {
        return ResponseEntity.ok(transactionService.getAllUnpaid());
    }


    @GetMapping("/pazi")
    public void galp() {
        transactionService.getUnpaidMembers();
    }


    @GetMapping("/makni")
    public void galpm() {
        transactionService.resetUnpaidMembers();
    }
}
