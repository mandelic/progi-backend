package com.runtimeterror.sahisti.news.entity;


import com.runtimeterror.sahisti.column.entity.Column;
import com.runtimeterror.sahisti.dailyChallenge.entity.DailyChallenge;
import com.runtimeterror.sahisti.user.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "daily_challenge_error")
@Getter
@Setter
@NoArgsConstructor
public class DailyChallengeError {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    String description;

    Boolean checked;

    Boolean valid;

    @ManyToOne
    @JoinColumn(name="daily_challenge_id", nullable=false)
    DailyChallenge dailyChallenge;

    @ManyToMany(mappedBy = "dcerrors")
    Set<User> members = new HashSet<>();
}
