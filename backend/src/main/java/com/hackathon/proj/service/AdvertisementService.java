package com.hackathon.proj.service;

import com.hackathon.proj.dto.AdvertisementDto;
import com.hackathon.proj.enums.AnimalType;

import java.util.List;
import java.util.UUID;

public interface AdvertisementService {
    UUID createAdvertisement(AdvertisementDto dto);

    AdvertisementDto getById(UUID id);

    List<AdvertisementDto> getAll(Integer page, Integer amount);

    List<AdvertisementDto> getBySheltersId(UUID id);

    UUID updateAdvertisement(AdvertisementDto dto);

    List<AdvertisementDto> findAdvertisements(AnimalType animalType, Double minAge, Double maxAge, String healthStatus);
}
