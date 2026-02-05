package com.example.demo.Service;

import org.springframework.stereotype.Service;

import com.example.demo.Dto.LoginRequest;
import com.example.demo.Dto.RegisterRequest;
import com.example.demo.Entity.User;
import com.example.demo.Repository.UserRepository;

@Service
public class AuthService {

    private final UserRepository userRepository;

    public AuthService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public String register(RegisterRequest request) {

        if (!request.getPassword().equals(request.getConfirmPassword())) {
            return "Password and Confirm Password do not match";
        }

        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            return "Email already registered";
        }

        User user = new User();
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(request.getPassword()); // 🔒 later BCrypt

        userRepository.save(user);
        return "Registration successful";
    }

    public String login(LoginRequest request) {
        return userRepository.findByEmail(request.getEmail())
            .map(user -> {
                if (user.getPassword().equals(request.getPassword())) {
                    return "Login successful";
                } else {
                    return "Invalid password";
                }
            })
            .orElse("User not found");
    }
}