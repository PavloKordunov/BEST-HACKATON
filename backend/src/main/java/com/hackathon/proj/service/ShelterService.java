package com.hackathon.proj.service;

import com.hackathon.proj.dto.ShelterDto;
import jakarta.validation.Valid;
import org.apache.coyote.BadRequestException;

import java.util.Map;

public interface ShelterService {
    Map<String, Object> saveShelter(ShelterDto shelterDto);
    Map<String, Object> getUserByEmailAndPassword(ShelterDto shelterDto) throws BadRequestException;
    Map<String, Object> getUserByEmail(String email);
}
