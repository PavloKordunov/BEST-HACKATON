package com.hackathon.proj.repository;

import com.hackathon.proj.entity.Advertisement;
import com.hackathon.proj.enums.AnimalType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface AdvertisementRepository extends JpaRepository<Advertisement, UUID> {
    List<Advertisement> findAllByShelterId(UUID id);

    List<Advertisement> findAllByAgeBetweenAndAnimalTypeAndHealthStatus(Double ageAfter, Double ageBefore, AnimalType animalType, String healthStatus);

}
