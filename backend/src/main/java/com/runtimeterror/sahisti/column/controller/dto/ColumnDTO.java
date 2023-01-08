package com.runtimeterror.sahisti.column.controller.dto;

import com.runtimeterror.sahisti.column.entity.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter
@NoArgsConstructor
public class ColumnDTO {
    private String title;

    public ColumnDTO(Column column) {
        title = column.getTitle();
    }
}
