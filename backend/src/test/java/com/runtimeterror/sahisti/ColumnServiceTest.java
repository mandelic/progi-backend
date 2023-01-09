package com.runtimeterror.sahisti;

import com.runtimeterror.sahisti.column.entity.Column;
import com.runtimeterror.sahisti.column.repository.ColumnRepository;
import com.runtimeterror.sahisti.column.service.impl.ColumnServiceImpl;
import com.runtimeterror.sahisti.configuration.exception.EntityIdNotFoundException;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.Arrays;
import java.util.List;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@ExtendWith(SpringExtension.class)
public class ColumnServiceTest {
    @Mock
    private ColumnRepository columnRepository;

    @InjectMocks
    ColumnServiceImpl columnService;

    @Test
    public void saveColumn_Success() {
        Column column = new Column("Chess");
        when(columnRepository.save(any(Column.class))).thenReturn(column);

        Column savedColumn = columnRepository.save(column);
        assertThat(savedColumn.getTitle()).isEqualTo("Chess");
    }

    @Test
    public void column_exists_in_db_success() {
        Column column = new Column("Chess");
        List<Column> columnList = Arrays.asList(column);
        when(columnRepository.findAll()).thenReturn(columnList);
        List<Column> fetchedColumns = columnService.findAll();
        assertThat(fetchedColumns).isEqualTo(columnList);
    }

    @Test
    public void column_search_not_found_failed() {
        Assertions.assertThrows(EntityIdNotFoundException.class, () -> columnService.findById(Long.MAX_VALUE));
    }

}
