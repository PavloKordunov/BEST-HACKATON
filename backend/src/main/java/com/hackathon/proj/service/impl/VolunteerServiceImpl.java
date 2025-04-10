package com.hackathon.proj.service.impl;

import com.hackathon.proj.dto.VolunteerDto;
import com.hackathon.proj.entity.Volunteer;
import com.hackathon.proj.repository.VolunteerRepository;
import com.hackathon.proj.service.VolunteerService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class VolunteerServiceImpl implements VolunteerService {
    private final VolunteerRepository volunteerRepository;


    @Override
    public Long saveVolunteer(VolunteerDto volunteerDto) {
        Volunteer volunteer = getVolunteer(volunteerDto);
        Volunteer entity = volunteerRepository.save(volunteer);
        return entity.getId();
    }

    private static Volunteer getVolunteer(VolunteerDto volunteerDto) {
        return Volunteer.builder()
                .Name(volunteerDto.name())
                .build();
    }
}
