package com.hackathon.proj.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Builder;

@Builder
public record VolunteerDto(
        String name,
        @NotBlank String email,
        String password,
        String superscription,
        String telephoneNumber
) {
}
