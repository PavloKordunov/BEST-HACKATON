package com.hackathon.proj.service;

import com.hackathon.proj.dto.VolunteerDto;
import org.apache.coyote.BadRequestException;


public interface VolunteerService {
    String saveVolunteer(VolunteerDto volunteerDto);
    String getUserByEmail(String email);
    String getUserByEmailAndPassword(VolunteerDto volunteerDto) throws BadRequestException;
}
