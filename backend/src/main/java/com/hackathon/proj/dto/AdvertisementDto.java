package com.hackathon.proj.dto;

import com.hackathon.proj.enums.SexType;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Builder
public record AdvertisementDto(
        UUID id,
        @NotBlank String name,
        Double age,
        SexType sex,
        String animalType,
        String breed,
        String image,
        List<String> additionalImages,
        String size,
        String colorFur,
        @NotBlank String healthStatus,
        String description,
        @NotNull Boolean isActive,
        @NotNull UUID shelterId,
        LocalDateTime createdAt
) {
}
