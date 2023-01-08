package com.runtimeterror.sahisti.transaction.repository;

import com.runtimeterror.sahisti.transaction.entity.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TransactionRepository extends JpaRepository<Transaction, Long>{
    List<Transaction> findAllByUserId(Long id);
    Boolean existsByMonthAndYearAndUserId(String month, String year, Long id);
}