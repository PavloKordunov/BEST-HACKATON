package com.hackathon.proj.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
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
    @JsonProperty("userType")
    public String userType() {
        return "volunteer";
    }
}
