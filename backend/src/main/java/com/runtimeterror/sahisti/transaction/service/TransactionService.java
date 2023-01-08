package com.runtimeterror.sahisti.transaction.service;

import com.runtimeterror.sahisti.transaction.entity.Transaction;

import java.time.LocalDate;
import java.util.List;

public interface TransactionService {

    Transaction addTransaction(String month,Long id);

    List<Transaction> getById(Long id);

    List<Transaction> getAll();
}