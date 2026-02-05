package com.example.demo.Controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import com.example.demo.Dto.LoginRequest;
import com.example.demo.Dto.RegisterRequest;
import com.example.demo.Service.AuthService;
import com.example.demo.Config.JwtUtil;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.context.annotation.Lazy; // Indha import mukkkiyam

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    private final AuthService authService;
    private final JwtUtil jwtUtil;
    private final UserDetailsService userDetailsService;

    // Dependency-ah @Lazy vachu inject pannunga, appo dhaan Server Error varaadhu
    public AuthController(AuthService authService, JwtUtil jwtUtil, @Lazy UserDetailsService userDetailsService) {
        this.authService = authService;
        this.jwtUtil = jwtUtil;
        this.userDetailsService = userDetailsService;
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterRequest request) {
        String result = authService.register(request);
        return ResponseEntity.ok(result);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        // 1. AuthService moolam login check pannunga
        String result = authService.login(request);

        // 2. Login success-na mattum token generate pannunga
        if ("Login successful".equals(result)) {
            // UserDetails-ai load panni token generate pannuvom
            UserDetails userDetails = userDetailsService.loadUserByUsername(request.getEmail());
            String token = jwtUtil.generateToken(userDetails);

            // 3. React-ku JSON format-la token-ai anupuroam
            Map<String, String> response = new HashMap<>();
            response.put("token", token);
            response.put("message", "Login successful");

            return ResponseEntity.ok(response);
        } else {
            // Login failed-na error message
            return ResponseEntity.status(401).body(result);
        }
    }
}