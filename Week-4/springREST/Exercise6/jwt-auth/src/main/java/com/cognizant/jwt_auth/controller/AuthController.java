package com.cognizant.jwt_auth.controller;

import com.cognizant.jwt.util.JwtUtil;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

@RestController
public class AuthController {

    @Autowired
    private JwtUtil jwtUtil;

    @GetMapping("/authenticate")
    public Map<String, String> authenticate(HttpServletRequest request) {
        String authHeader = request.getHeader("Authorization");

        if (authHeader != null && authHeader.startsWith("Basic ")) {
            String base64Credentials = authHeader.substring("Basic ".length());
            String decoded = new String(Base64.getDecoder().decode(base64Credentials));
            String[] parts = decoded.split(":", 2);
            String username = parts[0];
            String password = parts[1];

            // Basic static check for demo (replace with user service/db check)
            if ("user".equals(username) && "pwd".equals(password)) {
                String token = jwtUtil.generateToken(username);
                Map<String, String> response = new HashMap<>();
                response.put("token", token);
                return response;
            }
        }

        throw new RuntimeException("Invalid Credentials");
    }
}
