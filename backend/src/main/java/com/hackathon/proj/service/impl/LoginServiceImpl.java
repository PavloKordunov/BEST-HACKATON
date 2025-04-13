package com.hackathon.proj.service.impl;

import com.hackathon.proj.dto.LoginDto;
import com.hackathon.proj.dto.ShelterDto;
import com.hackathon.proj.dto.VolunteerDto;
import com.hackathon.proj.entity.Shelter;
import com.hackathon.proj.entity.Volunteer;
import com.hackathon.proj.repository.ShelterRepository;
import com.hackathon.proj.repository.VolunteerRepository;
import com.hackathon.proj.service.JwtService;
import com.hackathon.proj.service.LoginService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.coyote.BadRequestException;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

import static com.hackathon.proj.service.impl.ShelterServiceImpl.mapToShelterDto;
import static com.hackathon.proj.service.impl.VolunteerServiceImpl.mapToVolunteerDto;

@Service
@Slf4j
@RequiredArgsConstructor
public class LoginServiceImpl implements LoginService {

    private final JwtService jwtService;

    private final VolunteerRepository volunteerRepository;
    private final ShelterRepository shelterRepository;


    @Override
    public Map<String, Object> getUserByEmailAndPassword(LoginDto loginDto) throws BadRequestException {
        log.info("Get user by email&password in LoginService");

        if (loginDto.password() == null) throw new BadRequestException("Body hasn't password");

        Volunteer volunteer = volunteerRepository.findByEmail(loginDto.email()).orElse(null);
        Shelter shelter = shelterRepository.findByEmail(loginDto.email()).orElse(null);
        areBothEqualNull(volunteer, shelter);
        if(shelter != null){
            if(!BCrypt.checkpw(loginDto.password(), shelter.getPassword())) return null;
            return getStringObjectMapShelter(shelter);
        }
        else{
            if(!BCrypt.checkpw(loginDto.password(), volunteer.getPassword())) return null;
            return getStringObjectMapVolunteer(volunteer);
        }
    }



    @Override
    public Map<String, Object> getUserByEmail(String email) {
        log.info("Get user by email in LoginService");

        Shelter shelter = shelterRepository.findByEmail(email).orElse(null);
        Volunteer volunteer = volunteerRepository.findByEmail(email).orElse(null);
        areBothEqualNull(volunteer, shelter);
        if(volunteer != null){
            return getStringObjectMapVolunteer(volunteer);
        }
        else {
            return getStringObjectMapShelter(shelter);
        }
    }

    private static void areBothEqualNull(Volunteer volunteer, Shelter shelter) {
        if (volunteer == null && shelter == null) throw new EntityNotFoundException("User not found");
    }

    private Map<String, Object> getStringObjectMapVolunteer(Volunteer volunteer) {
        String jwt = jwtService.generateToken(volunteer.getEmail(), volunteer.getName());
        VolunteerDto volunteerMapDto = mapToVolunteerDto(volunteer);
        Map<String, Object> map = new HashMap<>();
        map.put("token", jwt);
        map.put("user", volunteerMapDto);
        return map;
    }

    private Map<String, Object> getStringObjectMapShelter(Shelter shelter) {
        String jwt = jwtService.generateToken(shelter.getEmail(), shelter.getName());
        ShelterDto shelterDto = mapToShelterDto(shelter);
        Map<String, Object> map = new HashMap<>();
        map.put("token", jwt);
        map.put("user", shelterDto);
        return map;
    }
}
