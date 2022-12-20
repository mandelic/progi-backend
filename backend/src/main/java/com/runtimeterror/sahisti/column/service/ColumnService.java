package com.runtimeterror.sahisti.column.service;

import com.runtimeterror.sahisti.column.entity.Column;
import com.runtimeterror.sahisti.user.entity.User;

import java.util.List;

public interface ColumnService {

    List<Column> findAll();
    Column findById(Long id);
    Column addColumn(Column column);

}