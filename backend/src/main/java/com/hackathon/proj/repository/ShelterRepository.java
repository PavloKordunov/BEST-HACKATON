package com.hackathon.proj.repository;

import com.hackathon.proj.entity.Shelter;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface ShelterRepository extends JpaRepository<Shelter, UUID> {
    Optional<Shelter> findByEmail(String email);
}
