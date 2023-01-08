package com.runtimeterror.sahisti.news.controller.dto;

import com.runtimeterror.sahisti.news.entity.News;
import com.runtimeterror.sahisti.training.entity.Training;
import com.runtimeterror.sahisti.transaction.entity.Transaction;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
public class TransactionDTO {

    String month;

    Long userId;

    public TransactionDTO(Transaction transaction) {
        this.month = transaction.getMonth();
        this.userId = transaction.getUser().getId();
    }

}
