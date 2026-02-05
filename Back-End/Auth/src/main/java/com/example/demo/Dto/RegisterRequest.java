package com.example.demo.Dto;

public class RegisterRequest {
    private String name;
    private String email;
    private String password;
    private String confirmPassword;

    public String getName() { return name; }
    public String getEmail() { return email; }
    public String getPassword() { return password; }
    public String getConfirmPassword() { return confirmPassword; }
}
