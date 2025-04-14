package com.hackathon.proj.service.impl;

import com.hackathon.proj.dto.ShelterDto;
import com.hackathon.proj.entity.Shelter;
import com.hackathon.proj.repository.ShelterRepository;
import com.hackathon.proj.service.JwtService;
import com.hackathon.proj.service.ShelterService;
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


@Service
@Slf4j
@RequiredArgsConstructor
@Transactional
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
    public ShelterDto getById(UUID id) {
        log.info("Get shelter by ID in ShelterService");

        Shelter shelter = shelterRepository.findById(id).orElseThrow(
                () -> new EntityNotFoundException("Shelter not found"));
        return mapToShelterDto(shelter);
    }

    @Override
    public List<ShelterDto> getAllShelters(Integer page, Integer amount) {
        log.info("Get shelters in ShelterService");

        Pageable pageable = PageRequest.of(page, amount, Sort.by("createdAt").descending());
        List<Shelter> shelters = shelterRepository.findAll(pageable).getContent();
        return shelters.stream()
                .map(ShelterServiceImpl::mapToShelterDto)
                .toList();
    }

    @Override
    @Transactional
    public UUID updateShelter(ShelterDto shelterDto) {
        log.info("Update shelter in ShelterService");

        Shelter shelter = shelterRepository.findByEmail(shelterDto.email()).orElseThrow(
                () -> new EntityNotFoundException("Shelter not found"));
        updateShelterFields(shelter, shelterDto);
        shelterRepository.save(shelter);
        return shelter.getId();
    }


    private void updateShelterFields(Shelter shelter, ShelterDto shelterDto) {
        if (!Objects.equals(shelterDto.name(), shelter.getName()))
            shelter.setName(shelterDto.name());
        if (!Objects.equals(shelter.getLocation(), shelterDto.location()))
            shelter.setLocation(shelterDto.location());
        if (!Objects.equals(shelter.getCity(), shelterDto.city()))
            shelter.setCity(shelterDto.city());
        if (!Objects.equals(shelter.getTelephoneNumber(), shelterDto.telephoneNumber()))
            shelter.setTelephoneNumber(shelterDto.telephoneNumber());
        if(!Objects.equals(shelter.getDescription(), shelterDto.description()))
            shelter.setDescription(shelterDto.description());
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
                .description(shelterDto.description())
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

    public static ShelterDto mapToShelterDto(Shelter shelter) {
        return ShelterDto.builder()
                .id(shelter.getId())
                .name(shelter.getName())
                .email(shelter.getEmail())
                .shelterType(shelter.getShelterType())
                .city(shelter.getCity())
                .location(shelter.getLocation())
                .telephoneNumber(shelter.getTelephoneNumber())
                .description(shelter.getDescription())
                .build();
    }

}
