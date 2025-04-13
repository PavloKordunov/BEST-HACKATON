package com.hackathon.proj.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.hackathon.proj.enums.ShelterType;
import jakarta.validation.constraints.NotBlank;
import lombok.Builder;

import java.util.UUID;

@Builder
public record ShelterDto(
        UUID id,
        String name,
        @NotBlank String email,
        String password,
        String location,
        String city,
        ShelterType shelterType,
        String telephoneNumber
) {

    @JsonProperty("userType")
    public String userType() {
        return "shelter";
    }
}
