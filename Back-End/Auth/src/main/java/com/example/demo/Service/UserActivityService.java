package com.example.demo.Service;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.User;
import com.example.demo.Entity.UserActivity;
import com.example.demo.Repository.UserActivityRepository;
import com.example.demo.Repository.UserRepository;

@Service
public class UserActivityService {

    @Autowired
    private UserActivityRepository activityRepo;

    @Autowired
    private UserRepository userRepo;

    public void logActivity(Long userId, String action, String details) {

        // ✅ Correct Entity User
        User user = userRepo.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        UserActivity activity = new UserActivity();
        activity.setUser(user);
        activity.setAction(action);
        activity.setDetails(details);
        activity.setTimestamp(LocalDateTime.now());

        activityRepo.save(activity);
    }
}