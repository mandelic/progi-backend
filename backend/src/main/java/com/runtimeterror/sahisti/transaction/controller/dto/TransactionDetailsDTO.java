package com.runtimeterror.sahisti.transaction.controller.dto;

import com.runtimeterror.sahisti.transaction.entity.Transaction;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class TransactionDetailsDTO {

    String month;

    String year;

    String member;

    public TransactionDetailsDTO(Transaction transaction) {
        this.month = transaction.getMonth();
        this.year = transaction.getYear();
        this.member = transaction.getUser().getFirstName() + " " + transaction.getUser().getLastName();
    }

}
