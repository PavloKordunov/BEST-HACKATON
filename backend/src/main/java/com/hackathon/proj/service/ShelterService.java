package com.hackathon.proj.service;

import com.hackathon.proj.dto.ShelterDto;
import jakarta.validation.Valid;
import org.apache.coyote.BadRequestException;

import java.util.List;
import java.util.Map;
import java.util.UUID;

public interface ShelterService {
    Map<String, Object> saveShelter(ShelterDto shelterDto);
    Map<String, Object> getUserByEmailAndPassword(ShelterDto shelterDto) throws BadRequestException;
    Map<String, Object> getUserByEmail(String email);

    ShelterDto getById(UUID id);

    List<ShelterDto> getAllShelters(Integer page, Integer amount);

    UUID updateShelter(ShelterDto shelterDto);
}
