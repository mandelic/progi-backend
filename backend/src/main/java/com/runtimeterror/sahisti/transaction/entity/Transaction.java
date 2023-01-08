package com.runtimeterror.sahisti.transaction.entity;


import com.runtimeterror.sahisti.user.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "transactions")
@Getter
@Setter
@NoArgsConstructor
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    String month;

    Long price;

    @ManyToOne
    @JoinColumn(name="member_id", nullable=false)
    User user;

    public Transaction(String month, Long price, User user) {
        this.month = month;
        this.price = price;
        this.user = user;
    }

}
