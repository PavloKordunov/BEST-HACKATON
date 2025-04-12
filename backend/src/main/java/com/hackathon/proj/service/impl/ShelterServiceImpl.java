package com.hackathon.proj.service.impl;

import com.hackathon.proj.dto.ShelterDto;
import com.hackathon.proj.entity.Shelter;
import com.hackathon.proj.repository.ShelterRepository;
import com.hackathon.proj.service.JwtService;
import com.hackathon.proj.service.ShelterService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.coyote.BadRequestException;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;


@Service
@Slf4j
@RequiredArgsConstructor
public class ShelterServiceImpl implements ShelterService {

    private final ShelterRepository shelterRepository;
    private final JwtService jwtService;

    @Override
    public Map<String, Object> saveShelter(ShelterDto shelterDto) {
        log.info("Create shelter in ShelterService");

        Shelter shelter = getShelter(shelterDto);
        Shelter entity = shelterRepository.save(shelter);

        return getStringObjectMap(entity);
    }


    @Override
    public Map<String, Object> getUserByEmail(String email) {
        log.info("Get shelter by email in ShelterService");

        Shelter shelter = shelterRepository.findByEmail(email).orElseThrow(
                () -> new EntityNotFoundException("Shelter not found"));
        return getStringObjectMap(shelter);
    }

    @Override
    public Map<String, Object> getUserByEmailAndPassword(ShelterDto shelterDto) throws BadRequestException {
        log.info("Get shelter by email&password in ShelterService");

        if (shelterDto.password() == null) throw new BadRequestException("Body hasn't password");

        Shelter shelter = shelterRepository.findByEmail(shelterDto.email()).orElseThrow(
                () -> new EntityNotFoundException("Shelter not found"));

        if(arePasswordsEqual(shelterDto, shelter)) return null;

        return getStringObjectMap(shelter);
    }

    private boolean arePasswordsEqual(ShelterDto shelterDto, Shelter shelter) {
        return !BCrypt.checkpw(shelterDto.password(), shelter.getPassword());
    }

    private Shelter getShelter(ShelterDto shelterDto) {
        Shelter shelter;
        if (shelterDto.password() != null) {
            String password = BCrypt.hashpw(shelterDto.password(), BCrypt.gensalt());
            shelter = mapToShelter(shelterDto, password);
        } else {
            shelter = mapToShelter(shelterDto, null);
        }
        return shelter;
    }

    private static Shelter mapToShelter(ShelterDto shelterDto, String password) {
        return Shelter.builder()
                .name(shelterDto.name())
                .city(shelterDto.city())
                .shelterType(shelterDto.shelterType())
                .email(shelterDto.email())
                .location(shelterDto.location())
                .telephoneNumber(shelterDto.telephoneNumber())
                .password(password)
                .build();
    }

    private Map<String, Object> getStringObjectMap(Shelter shelter) {
        String jwt = jwtService.generateToken(shelter.getEmail(), shelter.getName());
        ShelterDto shelterDto = mapToShelterDto(shelter);
        Map<String, Object> map = new HashMap<>();
        map.put("token", jwt);
        map.put("user", shelterDto);
        return map;
    }

    private ShelterDto mapToShelterDto(Shelter shelter) {
        return ShelterDto.builder()
                .name(shelter.getName())
                .email(shelter.getEmail())
                .shelterType(shelter.getShelterType())
                .city(shelter.getCity())
                .location(shelter.getLocation())
                .telephoneNumber(shelter.getTelephoneNumber())
                .build();
    }

}
