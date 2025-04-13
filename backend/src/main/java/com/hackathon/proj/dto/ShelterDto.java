package com.hackathon.proj.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
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

    @JsonProperty("userType")
    public String userType() {
        return "shelter";
    }
}
