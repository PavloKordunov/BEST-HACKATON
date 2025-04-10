package com.hackathon.proj.dto;

import lombok.Builder;
import lombok.Data;

@Builder
public record VolunteerDto(
        String name
) {
}
