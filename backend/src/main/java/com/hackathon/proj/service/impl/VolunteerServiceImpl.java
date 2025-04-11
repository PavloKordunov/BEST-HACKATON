package com.hackathon.proj.service.impl;

import com.hackathon.proj.dto.VolunteerDto;
import com.hackathon.proj.entity.Volunteer;
import com.hackathon.proj.repository.VolunteerRepository;
import com.hackathon.proj.service.JwtService;
import com.hackathon.proj.service.VolunteerService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.coyote.BadRequestException;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.stereotype.Service;


@Slf4j
@RequiredArgsConstructor
@Service
public class VolunteerServiceImpl implements VolunteerService {
    private final VolunteerRepository volunteerRepository;
    private final JwtService jwtService;

    @Override
    public String saveVolunteer(VolunteerDto volunteerDto) {
        log.info("Create volunteer in VolunteerService");

        Volunteer volunteer = getVolunteer(volunteerDto);
        Volunteer entity = volunteerRepository.save(volunteer);

        return jwtService.generateToken(entity.getEmail(), entity.getName());
    }


    @Override
    public String getUserByEmail(String email) {
        log.info("Get volunteer by email in VolunteerService");

        Volunteer volunteer = volunteerRepository.findByEmail(email).orElseThrow(
                () -> new EntityNotFoundException("Volunteer not found"));
        return jwtService.generateToken(volunteer.getEmail(), volunteer.getName());
    }


    @Override
    public String getUserByEmailAndPassword(VolunteerDto volunteerDto) throws BadRequestException {
        log.info("Get volunteer by email&password in VolunteerService");

        if (volunteerDto.password() == null) throw new BadRequestException("Body hasn't password");

        Volunteer volunteer = volunteerRepository.findByEmail(volunteerDto.email()).orElseThrow(
                () -> new EntityNotFoundException("Volunteer not found"));
        
        if(arePasswordsEqual(volunteerDto, volunteer)) return null;
        return jwtService.generateToken(volunteer.getEmail(), volunteer.getName());
    }

    private static boolean arePasswordsEqual(VolunteerDto volunteerDto, Volunteer volunteer) {
        return !BCrypt.checkpw(volunteerDto.password(), volunteer.getPassword());
    }

    private static Volunteer getVolunteer(VolunteerDto volunteerDto) {
        Volunteer volunteer;
        if (volunteerDto.password() != null) {
            String password = BCrypt.hashpw(volunteerDto.password(), BCrypt.gensalt());
            volunteer = mapToVolunteer(volunteerDto, password);
        } else {
            volunteer = mapToVolunteer(volunteerDto, null);
        }
        return volunteer;
    }

    private static Volunteer mapToVolunteer(VolunteerDto volunteerDto, String password) {
        return Volunteer.builder()
                .name(volunteerDto.name())
                .telephoneNumber(volunteerDto.telephoneNumber())
                .password(password)
                .email(volunteerDto.email())
                .superscription(volunteerDto.superscription())
                .build();
    }

    private static VolunteerDto mapToVolunteerDto(Volunteer volunteer) {
        return VolunteerDto.builder()
                .email(volunteer.getEmail())
                .telephoneNumber(volunteer.getTelephoneNumber())
                .name(volunteer.getName())
                .superscription(volunteer.getSuperscription())
                .build();
    }


}
