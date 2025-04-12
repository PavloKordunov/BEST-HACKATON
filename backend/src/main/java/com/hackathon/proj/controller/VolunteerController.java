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
@CrossOrigin("https://localhost:3000")
@RequestMapping("/api/volunteer")
public class VolunteerController {
    private final VolunteerService volunteerService;

    @PostMapping("/create")
    public ApiResponse<?> saveVolunteer(@Valid @RequestBody VolunteerDto volunteerDto){
        Map<String, Object> jwt = volunteerService.saveVolunteer(volunteerDto);
        return new ApiResponse<>(true, HttpStatus.CREATED, "Create successful volunteer", jwt);
    }

    @GetMapping("/base")
    public ApiResponse<?> getVolunteer(@Valid @RequestBody VolunteerDto volunteerDto) throws BadRequestException {
        Map<String, Object> volunteer = volunteerService.getUserByEmailAndPassword(volunteerDto);
        return new ApiResponse<>(true, HttpStatus.OK, "Successful get volunteer by base way", volunteer);
    }

    @GetMapping("/email/{email}")
    public ApiResponse<?> getVolunteerByEmail(@PathVariable String email){
        Map<String, Object> volunteer = volunteerService.getUserByEmail(email);
        return new ApiResponse<>(true, HttpStatus.OK, "Successful get volunteer by API", volunteer);
    }

    @GetMapping("/id/{id}")
    public ApiResponse<?> getVolunteerById(@PathVariable UUID id){
        VolunteerDto volunteerDto = volunteerService.getById(id);
        return new ApiResponse<>(true, HttpStatus.OK, "Successful get volunteer by ID", volunteerDto);
    }

    @GetMapping
    public ApiResponse<?> getAllVolunteers(@RequestParam Integer page,
                                           @RequestParam Integer amount) {
        List<VolunteerDto> volunteers = volunteerService.getAllVolunteers(page, amount);
        return new ApiResponse<>(true, HttpStatus.OK, "Successful get volunteers", volunteers);
    }

    @PatchMapping("/update")
    public ApiResponse<?> updateVolunteer(@Valid @RequestBody VolunteerDto volunteerDto){
        UUID id = volunteerService.updateVolunteer(volunteerDto);
        return ApiResponse.apiResponse(true, 200, "Successful update volunteer", id);
    }

}
