package com.hackathon.proj.service;

public interface JwtService {
    String generateToken(String email, String username);
}
