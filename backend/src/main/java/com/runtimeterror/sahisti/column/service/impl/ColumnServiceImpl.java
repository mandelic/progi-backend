package com.runtimeterror.sahisti.column.service.impl;

import com.runtimeterror.sahisti.column.entity.Column;
import com.runtimeterror.sahisti.column.repository.ColumnRepository;
import com.runtimeterror.sahisti.column.service.ColumnService;
import com.runtimeterror.sahisti.configuration.exception.EntityIdNotFoundException;
import com.runtimeterror.sahisti.configuration.exception.UserIdNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ColumnServiceImpl implements ColumnService {

    @Autowired
    private ColumnRepository columnRepository;

    @Override
    public List<Column> findAll() {
        return columnRepository.findAll();
    }

    @Override
    public Column findById(Long id) {
        return columnRepository.findById(id).orElseThrow(() -> new EntityIdNotFoundException("Column", id));
    }

    @Override
    public Column addColumn(Column column) {
        return columnRepository.save(column);
    }
}
