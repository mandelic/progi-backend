package com.runtimeterror.sahisti.rankedList.entity;

import com.runtimeterror.sahisti.user.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "rankedList")
@Getter
@Setter
@NoArgsConstructor
public class RankedList {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    Long points;

    @OneToMany(mappedBy="ranked_list")
    Set<User> members = new HashSet<>();
}
