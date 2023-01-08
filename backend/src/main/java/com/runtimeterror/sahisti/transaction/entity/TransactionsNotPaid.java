package com.runtimeterror.sahisti.transaction.entity;

import com.runtimeterror.sahisti.user.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "transactions_not_paid")
@Getter
@Setter
@NoArgsConstructor
public class TransactionsNotPaid {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    Long memberId;

    public TransactionsNotPaid(Long id) {
        this.memberId = id;
    }
}

