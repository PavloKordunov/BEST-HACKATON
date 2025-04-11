package com.hackathon.proj.service;

import com.hackathon.proj.dto.VolunteerDto;
import org.apache.coyote.BadRequestException;


public interface VolunteerService {
    VolunteerDto saveVolunteer(VolunteerDto volunteerDto);
    VolunteerDto getUserByEmail(String email);
    VolunteerDto getUserByEmailAndPassword(VolunteerDto volunteerDto) throws BadRequestException;
}
