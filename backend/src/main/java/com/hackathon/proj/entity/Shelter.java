package com.hackathon.proj.entity;

import com.hackathon.proj.enums.ShelterType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

import java.util.UUID;

@Entity
@Data
public class Shelter {
    @Id
    @GeneratedValue
    private UUID id;

    @Column(nullable = false)
    private String name;

    private ShelterType shelterType;
}
