package com.hackathon.proj.service.impl;

import com.hackathon.proj.service.JwtService;
import com.hackathon.proj.util.JwtUtil;
import jakarta.validation.constraints.NotBlank;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class JwtServiceImpl implements JwtService {
    private final JwtUtil jwtUtil;

    @Override
    public String generateToken(@NotBlank String email, @NotBlank String username) {
        return jwtUtil.generateToken(email, username);
    }
}

