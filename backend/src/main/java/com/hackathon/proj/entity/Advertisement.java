package com.hackathon.proj.entity;

import com.hackathon.proj.enums.SexType;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Advertisement {
    @Id
    @GeneratedValue
    private UUID id;

    @Column(nullable = false)
    private String name;

    @Lob
    private String image;

    @Column
    private Double age;

    @Column
    private SexType sex;

    @Column
    private String animalType;

    @Column
    private String breed;

    @OneToMany(mappedBy = "advertisement", cascade = CascadeType.ALL ,orphanRemoval = true)
    private List<Img> imageUrls;

    @Column
    private String size;

    @Column
    private String colorFur;

    @Column(nullable = false)
    private String healthStatus;

    @Column
    private String description;

    @CreationTimestamp
    @Column(updatable = false)
    private LocalDateTime createdAt;

    @Column(nullable = false)
    private Boolean isActive;

    @ManyToOne
    @JoinColumn(name = "shelter_id")
    private Shelter shelter;

}
