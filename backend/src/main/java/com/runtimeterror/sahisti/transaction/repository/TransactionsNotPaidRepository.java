package com.runtimeterror.sahisti.transaction.repository;

import com.runtimeterror.sahisti.transaction.entity.Transaction;
import com.runtimeterror.sahisti.transaction.entity.TransactionsNotPaid;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TransactionsNotPaidRepository extends JpaRepository<TransactionsNotPaid, Long>{
    Boolean existsByMemberId(Long id);

    TransactionsNotPaid findByMemberId(Long id);
}