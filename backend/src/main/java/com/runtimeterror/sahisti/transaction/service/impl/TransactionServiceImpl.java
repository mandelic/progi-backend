package com.runtimeterror.sahisti.transaction.service.impl;

import com.runtimeterror.sahisti.transaction.repository.TransactionRepository;
import com.runtimeterror.sahisti.transaction.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TransactionServiceImpl implements TransactionService {

    @Autowired
    private TransactionRepository transactionRepository;
}
