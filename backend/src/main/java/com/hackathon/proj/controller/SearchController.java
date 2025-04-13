package com.hackathon.proj.controller;

import com.hackathon.proj.dto.AdvertisementDto;
import com.hackathon.proj.dto.ApiResponse;
import com.hackathon.proj.enums.AnimalType;
import com.hackathon.proj.service.AdvertisementService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin("https://localhost:3000")
@RequestMapping("/api/search")
public class SearchController {

    private final AdvertisementService advertisementService;

    @GetMapping("/advertisement")
    public ApiResponse<?> findAdvertisements(@RequestParam AnimalType animalType,
                                             @RequestParam Double minAge,
                                             @RequestParam Double maxAge,
                                             @RequestParam String healthStatus) {
        List<AdvertisementDto> advertisements = advertisementService
                .findAdvertisements(animalType, minAge, maxAge, healthStatus);
        return new ApiResponse<>(true, HttpStatus.OK, "Successful find advertisements", advertisements);
    }
}
