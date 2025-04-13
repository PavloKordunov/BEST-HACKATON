package com.hackathon.proj.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Builder;

@Builder
public record LoginDto(
        @NotBlank String email,
        String password
) {
}
