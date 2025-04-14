package com.hackathon.proj.service.impl;

import com.hackathon.proj.dto.VolunteerDto;
import com.hackathon.proj.entity.Volunteer;
import com.hackathon.proj.repository.VolunteerRepository;
import com.hackathon.proj.service.JwtService;
import com.hackathon.proj.service.VolunteerService;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.UUID;


@Slf4j
@RequiredArgsConstructor
@Service
@Transactional
public class VolunteerServiceImpl implements VolunteerService {

    private final VolunteerRepository volunteerRepository;
    private final JwtService jwtService;

    @Override
    public Map<String, Object> saveVolunteer(VolunteerDto volunteerDto) {
        log.info("Create volunteer in VolunteerService");

        Volunteer volunteer = getVolunteer(volunteerDto);
        Volunteer entity = volunteerRepository.save(volunteer);

        return getStringObjectMap(entity);
    }


//    @Override
//    public Map<String, Object> getUserByEmail(String email) {
//        log.info("Get volunteer by email in VolunteerService");
//
//        Volunteer volunteer = volunteerRepository.findByEmail(email).orElseThrow(
//                () -> new EntityNotFoundException("Volunteer not found"));
//        return getStringObjectMap(volunteer);
//    }
//
//
//    @Override
//    public Map<String, Object> getUserByEmailAndPassword(VolunteerDto volunteerDto) throws BadRequestException {
//        log.info("Get volunteer by email&password in VolunteerService");
//
//        if (volunteerDto.password() == null) throw new BadRequestException("Body hasn't password");
//
//        Volunteer volunteer = volunteerRepository.findByEmail(volunteerDto.email()).orElseThrow(
//                () -> new EntityNotFoundException("Volunteer not found"));
//
//        if(arePasswordsEqual(volunteerDto, volunteer)) return null;
//
//        return getStringObjectMap(volunteer);
//    }

    @Override
    public VolunteerDto getById(UUID id) {
        log.info("Get volunteer by ID in VolunteerService");

        Volunteer volunteer = volunteerRepository.findById(id).orElseThrow(
                () -> new EntityNotFoundException("Volunteer not found"));
        return mapToVolunteerDto(volunteer);
    }

    @Override
    public List<VolunteerDto> getAllVolunteers(Integer page, Integer amount) {
        log.info("Get volunteers in VolunteerService");

        Pageable pageable = PageRequest.of(page, amount, Sort.by("createdAt").descending());
        List<Volunteer> volunteers = volunteerRepository.findAll(pageable).getContent();
        return volunteers.stream()
                .map(VolunteerServiceImpl::mapToVolunteerDto)
                .toList();
    }

    @Override
    @Transactional
    public UUID updateVolunteer(VolunteerDto volunteerDto) {
        log.info("Update volunteer in VolunteerService");
        Volunteer volunteer = volunteerRepository.findByEmail(volunteerDto.email()).orElseThrow(
                () -> new EntityNotFoundException("Volunteer not found"));
        updateVolunteerFields(volunteer, volunteerDto);
        volunteerRepository.save(volunteer);
        return volunteer.getId();
    }

    private void updateVolunteerFields(Volunteer volunteer, VolunteerDto volunteerDto) {
        if (!Objects.equals(volunteerDto.name(), volunteer.getName()))
            volunteer.setName(volunteerDto.name());
        if (!Objects.equals(volunteerDto.telephoneNumber(), volunteer.getTelephoneNumber()))
            volunteer.setTelephoneNumber(volunteerDto.telephoneNumber());
        if (!Objects.equals(volunteerDto.superscription(), volunteer.getSuperscription()))
            volunteer.setSuperscription(volunteerDto.superscription());
    }


    private Map<String, Object> getStringObjectMap(Volunteer volunteer) {
        String jwt = jwtService.generateToken(volunteer.getEmail(), volunteer.getName());
        VolunteerDto volunteerMapDto = mapToVolunteerDto(volunteer);
        Map<String, Object> map = new HashMap<>();
        map.put("token", jwt);
        map.put("user", volunteerMapDto);
        return map;
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

    public static VolunteerDto mapToVolunteerDto(Volunteer volunteer) {
        return VolunteerDto.builder()
                .id(volunteer.getId())
                .email(volunteer.getEmail())
                .telephoneNumber(volunteer.getTelephoneNumber())
                .name(volunteer.getName())
                .superscription(volunteer.getSuperscription())
                .build();
    }


}
