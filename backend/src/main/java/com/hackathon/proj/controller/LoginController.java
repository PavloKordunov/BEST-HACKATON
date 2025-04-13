package com.hackathon.proj.controller;

import com.hackathon.proj.dto.ApiResponse;
import com.hackathon.proj.dto.LoginDto;
import com.hackathon.proj.service.LoginService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.BadRequestException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequiredArgsConstructor
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/login")
public class LoginController {

    private final LoginService loginService;

    @GetMapping("/native")
    public ApiResponse<Map<String, Object>> getUser(@Valid @RequestBody LoginDto loginDto) throws BadRequestException {
        Map<String, Object> user = loginService.getUserByEmailAndPassword(loginDto);
        return new ApiResponse<>(true, HttpStatus.OK, "Successful get user by native", user);
    }

    @GetMapping("/oauth")
    public ApiResponse<Map<String, Object>> getUserByEmail(@Valid @RequestBody String email){
        Map<String, Object> user = loginService.getUserByEmail(email);
        return new ApiResponse<>(true, HttpStatus.OK, "Successful get user by API", user);
    }
}
