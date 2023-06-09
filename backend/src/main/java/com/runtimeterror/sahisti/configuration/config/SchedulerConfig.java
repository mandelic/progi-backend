package com.runtimeterror.sahisti.configuration.config;

import com.runtimeterror.sahisti.transaction.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

@Configuration
@EnableScheduling
public class SchedulerConfig {
    @Autowired
    private TransactionService transactionService;

    @Scheduled(cron = "0 0 2 15 * ?")
    public void warningToPay() {
        transactionService.getUnpaidMembers();
    }

    @Scheduled(cron = "0 0 2 1 * ?")
    public void resetNotPaid() {
        transactionService.resetUnpaidMembers();
    }
}
