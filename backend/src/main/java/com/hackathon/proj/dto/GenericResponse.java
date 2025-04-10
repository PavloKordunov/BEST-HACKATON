package com.hackathon.proj.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class GenericResponse {

    private Long id;
    private String message;

    public GenericResponse(Long id) {
        this.id = id;
    }
}
