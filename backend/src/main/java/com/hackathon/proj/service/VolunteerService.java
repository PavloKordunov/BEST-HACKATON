package com.hackathon.proj.service;

import com.hackathon.proj.dto.VolunteerDto;
import org.apache.coyote.BadRequestException;

import java.util.Map;


public interface VolunteerService {
    Map<String, Object> saveVolunteer(VolunteerDto volunteerDto);
    Map<String, Object> getUserByEmail(String email);
    Map<String, Object> getUserByEmailAndPassword(VolunteerDto volunteerDto) throws BadRequestException;
}
