package com.runtimeterror.sahisti.transaction.repository;

import com.runtimeterror.sahisti.transaction.entity.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TransactionRepository extends JpaRepository<Transaction, Long>{

}