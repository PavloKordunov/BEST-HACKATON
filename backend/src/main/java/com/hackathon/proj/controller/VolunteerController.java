package com.hackathon.proj.controller;

import com.hackathon.proj.dto.ApiResponse;
import com.hackathon.proj.dto.GenericResponse;
import com.hackathon.proj.dto.VolunteerDto;
import com.hackathon.proj.service.VolunteerService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@CrossOrigin("https://localhost:3000")
@RequestMapping("/api/volunteer")
public class VolunteerController {
    private final VolunteerService volunteerService;

    @PostMapping("/create")
    public ApiResponse<GenericResponse> saveVolunteer(@Valid @RequestBody VolunteerDto volunteerDto){
        Long id = volunteerService.saveVolunteer(volunteerDto);
        return new ApiResponse<>(true, HttpStatus.CREATED, "Create successful", new GenericResponse(id));
    }
}
