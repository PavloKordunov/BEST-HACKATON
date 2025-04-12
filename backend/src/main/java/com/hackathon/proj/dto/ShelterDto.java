package com.hackathon.proj.dto;

import com.hackathon.proj.enums.ShelterType;
import jakarta.validation.constraints.NotBlank;
import lombok.Builder;

@Builder
public record ShelterDto(
        String name,
        @NotBlank String email,
        String password,
        String location,
        String city,
        ShelterType shelterType,
        String telephoneNumber
) {
}
