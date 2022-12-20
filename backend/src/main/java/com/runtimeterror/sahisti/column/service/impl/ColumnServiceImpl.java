package com.runtimeterror.sahisti.column.service.impl;

import com.runtimeterror.sahisti.column.repository.ColumnRepository;
import com.runtimeterror.sahisti.column.service.ColumnService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ColumnServiceImpl implements ColumnService {

    @Autowired
    private ColumnRepository columnRepository;
}
