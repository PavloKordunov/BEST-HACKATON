package com.hackathon.proj.controller;

import com.hackathon.proj.dto.ApiResponse;
import com.hackathon.proj.dto.VolunteerDto;
import com.hackathon.proj.service.VolunteerService;
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


@RestController
@RequiredArgsConstructor
@CrossOrigin("https://localhost:3000")
@RequestMapping("/api/volunteer")
public class VolunteerController {
    private final VolunteerService volunteerService;

    @PostMapping("/create")
    public ApiResponse<?> saveVolunteer(@Valid @RequestBody VolunteerDto volunteerDto){
        VolunteerDto volunteer = volunteerService.saveVolunteer(volunteerDto);
        return new ApiResponse<>(true, HttpStatus.CREATED, "Create successful", volunteer);
    }

    @GetMapping("/base")
    public ApiResponse<?> getVolunteer(@Valid @RequestBody VolunteerDto volunteerDto) throws BadRequestException {
        VolunteerDto volunteer = volunteerService.getUserByEmailAndPassword(volunteerDto);
        return new ApiResponse<>(true, HttpStatus.OK, "Successful get volunteer by base way", volunteer);
    }

    @GetMapping("/email/{email}")
    public ApiResponse<?> getVolunteer(@PathVariable String email){
        VolunteerDto volunteer = volunteerService.getUserByEmail(email);
        return new ApiResponse<>(true, HttpStatus.OK, "Successful get volunteer by API", volunteer);
    }

}
