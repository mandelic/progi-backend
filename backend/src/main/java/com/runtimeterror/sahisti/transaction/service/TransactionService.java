package com.runtimeterror.sahisti.transaction.service;

import com.runtimeterror.sahisti.transaction.entity.Transaction;
import com.runtimeterror.sahisti.transaction.entity.TransactionsNotPaid;

import java.util.List;

public interface TransactionService {

    Transaction addTransaction(String month, String year, Long id);

    List<Transaction> getByMemberId(Long id);

    List<Transaction> getAll();

    void getUnpaidMembers();

    List<Long> getAllUnpaid();
}