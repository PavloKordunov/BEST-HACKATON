package com.hackathon.proj.controller;

import com.hackathon.proj.dto.ApiResponse;
import com.hackathon.proj.dto.ShelterDto;
import com.hackathon.proj.service.ShelterService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.BadRequestException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequiredArgsConstructor
@CrossOrigin("https://localhost:3000")
@RequestMapping("/api/shelter")
public class ShelterController {
    private final ShelterService shelterService;

    @PostMapping("/create")
    public ApiResponse<?> saveShelter(@Valid @RequestBody ShelterDto shelterDto){
        Map<String, Object> jwt = shelterService.saveShelter(shelterDto);
        return new ApiResponse<>(true, HttpStatus.CREATED, "Create shelter successful", jwt);
    }

    @GetMapping("/base")
    public ApiResponse<?> getShelter(@Valid @RequestBody ShelterDto shelterDto) throws BadRequestException {
        Map<String, Object> shelter = shelterService.getUserByEmailAndPassword(shelterDto);
        return new ApiResponse<>(true, HttpStatus.OK, "Successful get shelter by base way", shelter);
    }

    @GetMapping("/email/{email}")
    public ApiResponse<?> getShelterByEmail(@PathVariable String email){
        Map<String, Object> shelter = shelterService.getUserByEmail(email);
        return new ApiResponse<>(true, HttpStatus.OK, "Successful get shelter by API", shelter);
    }

}
