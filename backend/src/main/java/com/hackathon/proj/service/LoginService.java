package com.hackathon.proj.service;

import com.hackathon.proj.dto.LoginDto;
import org.apache.coyote.BadRequestException;

import java.util.Map;

public interface LoginService {
    Map<String, Object> getUserByEmailAndPassword(LoginDto loginDto) throws BadRequestException;
    Map<String, Object> getUserByEmail(LoginDto email);
}
