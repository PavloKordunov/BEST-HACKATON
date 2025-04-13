package com.hackathon.proj.service.impl;

import com.hackathon.proj.dto.AdvertisementDto;
import com.hackathon.proj.entity.Advertisement;
import com.hackathon.proj.entity.Shelter;
import com.hackathon.proj.enums.AnimalType;
import com.hackathon.proj.repository.AdvertisementRepository;
import com.hackathon.proj.repository.ShelterRepository;
import com.hackathon.proj.service.AdvertisementService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.UUID;

@Service
@Slf4j
@RequiredArgsConstructor
public class AdvertisementServiceImpl implements AdvertisementService {

    private final AdvertisementRepository advertisementRepository;
    private final ShelterRepository shelterRepository;

    @Override
    public UUID createAdvertisement(AdvertisementDto dto) {
        log.info("Create shelter in AdvService");

        Shelter shelter = shelterRepository.findById(dto.shelterId()).orElseThrow(
                () -> new EntityNotFoundException("Advertisements not found"));
        Advertisement advertisement = mapToAdvertisement(dto, shelter);
        Advertisement advertisementEntity = advertisementRepository.save(advertisement);
        return advertisementEntity.getId();
    }

    @Override
    public AdvertisementDto getById(UUID id) {
        log.info("Get advertisements by ID in AdvService");

        Advertisement advertisement = advertisementRepository.findById(id).orElseThrow(
                () -> new EntityNotFoundException("Advertisements not found"));
        return mapToAdvertisementDto(advertisement);
    }

    @Override
    public List<AdvertisementDto> getAll(Integer page, Integer amount) {
        log.info("Get advertisements in AdvService");

        Pageable pageable = PageRequest.of(page, amount, Sort.by("createAt").descending());
        List<Advertisement> advertisements = advertisementRepository.findAll(pageable).getContent();
        return getAdvertisementDtoList(advertisements);
    }

    @Override
    public List<AdvertisementDto> getBySheltersId(UUID id) {
        log.info("Get advertisements by shelter ID in AdvService");

        List<Advertisement> advertisements = advertisementRepository.findAllByShelterId(id);
        return getAdvertisementDtoList(advertisements);
    }

    @Override
    public UUID updateAdvertisement(AdvertisementDto dto) {
        Advertisement advertisement = advertisementRepository.findById(dto.id()).orElseThrow(
                () -> new EntityNotFoundException("Advertisements not found"));
        updateAdvertisementFields(advertisement, dto);
        return advertisement.getId();
    }

    @Override
    public List<AdvertisementDto> findAdvertisements(AnimalType animalType, Double minAge, Double maxAge, String healthStatus) {
        List<Advertisement> advertisements = advertisementRepository
                .findAllByAgeBetweenAndAnimalTypeAndHealthStatus(minAge, maxAge, animalType, healthStatus);
        return getAdvertisementDtoList(advertisements);
    }

    private void updateAdvertisementFields(Advertisement advertisement, AdvertisementDto dto) {
        if (!Objects.equals(dto.name(), advertisement.getName()))
            advertisement.setName(dto.name());
        if (!Objects.equals(dto.age(), advertisement.getAge()))
            advertisement.setAge(dto.age());
        if (!Objects.equals(dto.sex(), advertisement.getSex()))
            advertisement.setSex(dto.sex());
        if (!Objects.equals(dto.animalType(), advertisement.getAnimalType()))
            advertisement.setAnimalType(dto.animalType());
        if (!Objects.equals(dto.breed(), advertisement.getBreed()))
            advertisement.setBreed(dto.breed());
        if (!Objects.equals(dto.size(), advertisement.getSize()))
            advertisement.setSize(dto.size());
        if (!Objects.equals(dto.colorFur(), advertisement.getColorFur()))
            advertisement.setColorFur(dto.colorFur());
        if (!Objects.equals(dto.healthStatus(), advertisement.getHealthStatus()))
            advertisement.setHealthStatus(dto.healthStatus());
        if (!Objects.equals(dto.description(), advertisement.getDescription()))
            advertisement.setDescription(dto.description());
        if (!Objects.equals(dto.isActive(), advertisement.getIsActive()))
            advertisement.setIsActive(dto.isActive());
        advertisement.setImageUrls(dto.images()); //TODO: implement more check
    }


    private static List<AdvertisementDto> getAdvertisementDtoList(List<Advertisement> advertisements) {
        return advertisements.stream()
                .map(AdvertisementServiceImpl::mapToAdvertisementDto)
                .toList();
    }

    public static AdvertisementDto mapToAdvertisementDto(Advertisement advertisement) {
        return AdvertisementDto.builder()
                .id(advertisement.getId())
                .name(advertisement.getName())
                .age(advertisement.getAge())
                .sex(advertisement.getSex())
                .animalType(advertisement.getAnimalType())
                .breed(advertisement.getBreed())
                .images(advertisement.getImageUrls())
                .size(advertisement.getSize())
                .colorFur(advertisement.getColorFur())
                .healthStatus(advertisement.getHealthStatus())
                .description(advertisement.getDescription())
                .isActive(advertisement.getIsActive())
                .shelterId(advertisement.getShelter() != null ? advertisement.getShelter().getId() : null)
                .build();
    }

    public static Advertisement mapToAdvertisement(AdvertisementDto dto, Shelter shelter) {
        return Advertisement.builder()
                .name(dto.name())
                .age(dto.age())
                .sex(dto.sex())
                .animalType(dto.animalType())
                .breed(dto.breed())
                .imageUrls(dto.images())
                .size(dto.size())
                .colorFur(dto.colorFur())
                .healthStatus(dto.healthStatus())
                .description(dto.description())
                .isActive(dto.isActive())
                .shelter(shelter)
                .build();
    }
}
