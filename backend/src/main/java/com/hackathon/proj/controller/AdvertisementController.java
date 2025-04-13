package com.hackathon.proj.controller;

import com.hackathon.proj.dto.AdvertisementDto;
import com.hackathon.proj.dto.ApiResponse;
import com.hackathon.proj.dto.GenericResponse;
import com.hackathon.proj.service.AdvertisementService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/advertisement")
public class AdvertisementController {

    private final AdvertisementService advertisementService;

    @PostMapping("/new")
    public ApiResponse<GenericResponse> createAdvertisement(@Valid @RequestBody AdvertisementDto dto){
        UUID id = advertisementService.createAdvertisement(dto);
        return ApiResponse.apiResponse(true, 201, "Successful create advertisement", id);
    }

    @GetMapping("/id/{id}")
    public ApiResponse<AdvertisementDto> getById(@PathVariable UUID id){
        AdvertisementDto dto = advertisementService.getById(id);
        return new ApiResponse<>(true, HttpStatus.OK, "Successful get by ID advertisement", dto);
    }

    @GetMapping
    public ApiResponse<List<AdvertisementDto>> getAllAdvertisements(@RequestParam Integer page,
                                               @RequestParam Integer amount) {
        List<AdvertisementDto> dtoList = advertisementService.getAll(page, amount);
        return new ApiResponse<>(true, HttpStatus.OK, "Successful get advertisements", dtoList);
    }

    @GetMapping("/shelter/{id}")
    public ApiResponse<List<AdvertisementDto>> getByShelterId(@PathVariable UUID id){
        List<AdvertisementDto> dto = advertisementService.getBySheltersId(id);
        return new ApiResponse<>(true, HttpStatus.OK, "Successful get advertisements by shelter ID", dto);
    }

    @PatchMapping("/update")
    public ApiResponse<GenericResponse> updateAdvertisement(@Valid @RequestBody AdvertisementDto dto){
        UUID id = advertisementService.updateAdvertisement(dto);
        return ApiResponse.apiResponse(true, 200, "Successful update advertisement", id);
    }


}
