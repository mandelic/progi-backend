package com.runtimeterror.sahisti.transaction.service.impl;

import com.runtimeterror.sahisti.configuration.exception.CustomMessageException;
import com.runtimeterror.sahisti.configuration.exception.UserIdNotFoundException;
import com.runtimeterror.sahisti.transaction.entity.Transaction;
import com.runtimeterror.sahisti.transaction.entity.TransactionsNotPaid;
import com.runtimeterror.sahisti.transaction.repository.TransactionRepository;
import com.runtimeterror.sahisti.transaction.repository.TransactionsNotPaidRepository;
import com.runtimeterror.sahisti.transaction.service.TransactionService;
import com.runtimeterror.sahisti.user.entity.User;
import com.runtimeterror.sahisti.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class TransactionServiceImpl implements TransactionService {

    @Autowired
    private TransactionRepository transactionRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TransactionsNotPaidRepository transactionsNotPaidRepository;

    @Override
    public Transaction addTransaction(String month, String year, Long id) {
        System.out.println(userRepository.findAll());
        User member = userRepository.findById(id).orElseThrow(() -> new UserIdNotFoundException(id));
        if (transactionRepository.existsByMonthAndYearAndUserId(month, year, id)) throw new CustomMessageException("Već ste uplatili za navedeni mjesec!");
        Boolean random = Math.random() < 0.85;
        if (random) {
             if (transactionsNotPaidRepository.existsByMemberId(id)){
                 TransactionsNotPaid tnp = transactionsNotPaidRepository.findByMemberId(id);
                 transactionsNotPaidRepository.delete(tnp);
             }
             member.setRole("ROLE_MEMBER");
             userRepository.save(member);
             return transactionRepository.save(new Transaction(month, year, 50L, member));
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

    @Override
    public void getUnpaidMembers() {
        Integer today = LocalDate.now().getMonthValue();
        String month = "";
        switch (today) {
            case 1:
                month = "Siječanj";
                break;
            case 2:
                month = "Veljača";
                break;
            case 3:
                month = "Ožujak";
                break;
            case 4:
                month = "Travanj";
                break;
            case 5:
                month = "Svibanj";
                break;
            case 6:
                month = "Lipanj";
                break;
            case 7:
                month = "Srpanj";
                break;
            case 8:
                month = "Kolovoz";
                break;
            case 9:
                month = "Rujan";
                break;
            case 10:
                month = "Listopad";
                break;
            case 11:
                month = "Studeni";
                break;
            case 12:
                month = "Prosinac";
                break;
        }
        int year = LocalDate.now().getYear();
        List<Long> paid = transactionRepository.findAllByMonthAndYear(month, "" + year).stream().map(t -> t.getUser().getId()).toList();
        List<Long> all = userRepository.findAll().stream().map(User::getId).collect(Collectors.toList());
        all.removeAll(paid);
        all.removeAll(userRepository.findAllByRole("ROLE_DELETED").stream().map(User::getId).collect(Collectors.toList()));
        all.removeAll(userRepository.findAllByRole("ROLE_ADMIN").stream().map(User::getId).collect(Collectors.toList()));
        all.removeAll(userRepository.findAllByRole("ROLE_SENSEI").stream().map(User::getId).collect(Collectors.toList()));
        System.out.println(all);
        all.forEach(a -> transactionsNotPaidRepository.save(new TransactionsNotPaid(a)));
    }

    @Override
    public List<Long> getAllUnpaid() {
        return transactionsNotPaidRepository.findAll().stream().map(t -> t.getMemberId()).collect(Collectors.toList());
    }

    @Override
    public void resetUnpaidMembers() {
        List<TransactionsNotPaid> list = transactionsNotPaidRepository.findAll();
        changeRoleUnpaid(list.stream().map(t -> t.getMemberId()).collect(Collectors.toList()));
        transactionsNotPaidRepository.deleteAll(list);
    }

    private void changeRoleUnpaid(List<Long> list) {
        List<User> members = new ArrayList<>();
        list.forEach(t -> {
            User member = userRepository.findById(t).orElseThrow(() -> new UserIdNotFoundException(t));
            members.add(member);
        });
        members.forEach(m -> {
            m.setRole("ROLE_UNPAID");
        });
        userRepository.saveAll(members);
    }
}
