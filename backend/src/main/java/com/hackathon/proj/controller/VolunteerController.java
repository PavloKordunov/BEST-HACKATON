package com.hackathon.proj.controller;

import com.hackathon.proj.dto.ApiResponse;
import com.hackathon.proj.dto.GenericResponse;
import com.hackathon.proj.dto.VolunteerDto;
import com.hackathon.proj.service.VolunteerService;
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
import java.util.Map;
import java.util.UUID;


@RestController
@RequiredArgsConstructor
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/volunteer")
public class VolunteerController {
    private final VolunteerService volunteerService;

    @PostMapping("/new")
    public ApiResponse<Map<String, Object>> createVolunteer(@Valid @RequestBody VolunteerDto volunteerDto){
        Map<String, Object> jwt = volunteerService.saveVolunteer(volunteerDto);
        return new ApiResponse<>(true, HttpStatus.CREATED, "Create successful volunteer", jwt);
    }

    @GetMapping("/id/{id}")
    public ApiResponse<VolunteerDto> getVolunteerById(@PathVariable UUID id){
        VolunteerDto volunteerDto = volunteerService.getById(id);
        return new ApiResponse<>(true, HttpStatus.OK, "Successful get volunteer by ID", volunteerDto);
    }

    @GetMapping
    public ApiResponse<List<VolunteerDto>> getAllVolunteers(@RequestParam Integer page,
                                           @RequestParam Integer amount) {
        List<VolunteerDto> volunteers = volunteerService.getAllVolunteers(page, amount);
        return new ApiResponse<>(true, HttpStatus.OK, "Successful get volunteers", volunteers);
    }

    @PatchMapping("/update")
    public ApiResponse<GenericResponse> updateVolunteer(@Valid @RequestBody VolunteerDto volunteerDto){
        UUID id = volunteerService.updateVolunteer(volunteerDto);
        return ApiResponse.apiResponse(true, 200, "Successful update volunteer", id);
    }

}
