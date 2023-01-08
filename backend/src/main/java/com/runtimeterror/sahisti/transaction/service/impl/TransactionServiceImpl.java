package com.runtimeterror.sahisti.transaction.service.impl;

import com.runtimeterror.sahisti.configuration.exception.CustomMessageException;
import com.runtimeterror.sahisti.configuration.exception.UserIdNotFoundException;
import com.runtimeterror.sahisti.transaction.entity.Transaction;
import com.runtimeterror.sahisti.transaction.repository.TransactionRepository;
import com.runtimeterror.sahisti.transaction.service.TransactionService;
import com.runtimeterror.sahisti.user.entity.User;
import com.runtimeterror.sahisti.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class TransactionServiceImpl implements TransactionService {

    @Autowired
    private TransactionRepository transactionRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public Transaction addTransaction(String month, String year, Long id) {
        System.out.println(userRepository.findAll());
        User member = userRepository.findById(id).orElseThrow(() -> new UserIdNotFoundException(id));
        if (transactionRepository.existsByMonthAndYearAndUserId(month, year, id)) throw new CustomMessageException("Već ste uplatili za navedeni mjesec!");
        Boolean random = Math.random() < 0.85;
        if (random) {
             return transactionRepository.save(new Transaction(month, year, 10L, member));
        } else {
            throw new CustomMessageException("Transakcija nije uspjela. Molimo Vas, pokušajte ponovno.");
        }
    }

    @Override
    public List<Transaction> getByMemberId(Long id) {
        return transactionRepository.findAllByUserId(id);
    }

    @Override
    public List<Transaction> getAll() {
        return transactionRepository.findAll();
    }
}
