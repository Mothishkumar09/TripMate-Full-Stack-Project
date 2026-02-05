package com.example.demo.Controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import com.example.demo.Entity.UserActivity;
import com.example.demo.Entity.User;
import com.example.demo.Repository.UserRepository;
import com.example.demo.Repository.UserActivityRepository;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@RestController
@RequestMapping("/api/user/activity")
@CrossOrigin(origins = "http://localhost:3000")
public class UserActivityController {

    private final UserActivityRepository userActivityRepository;
    private final UserRepository userRepository;

    public UserActivityController(UserActivityRepository userActivityRepository, UserRepository userRepository) {
        this.userActivityRepository = userActivityRepository;
        this.userRepository = userRepository;
    }

    // 1. TRIP-AI SAVE PANNA
    @PostMapping("/save")
    public ResponseEntity<?> saveActivity(@RequestBody UserActivity activity, Authentication authentication) {
        String email = authentication.getName();
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter dateStyle = DateTimeFormatter.ofPattern("dd-MM-yyyy");
        DateTimeFormatter timeStyle = DateTimeFormatter.ofPattern("HH:mm:ss");

        activity.setUserId(user.getId());
        activity.setUserEmail(user.getEmail());
        activity.setSavedDate(now.format(dateStyle));
        activity.setSavedTime(now.format(timeStyle));

        return ResponseEntity.ok(userActivityRepository.save(activity));
    }

    // 2. SAVED TRIPS-AI EDUPPATHARKU (VIEW)
    @GetMapping("/my-trips")
    public ResponseEntity<List<UserActivity>> getUserTrips(Authentication authentication) {
        String email = authentication.getName();
        return ResponseEntity.ok(userActivityRepository.findByUserEmail(email));
    }

    // 3. TRIP-AI UPDATE PANNA (EDIT)
    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateTrip(@PathVariable Long id, @RequestBody UserActivity updatedActivity) {
        return userActivityRepository.findById(id)
            .map(activity -> {
                activity.setTripPlace(updatedActivity.getTripPlace());
                activity.setBudget(updatedActivity.getBudget());
                activity.setStartDate(updatedActivity.getStartDate());
                activity.setEndDate(updatedActivity.getEndDate());
                return ResponseEntity.ok(userActivityRepository.save(activity));
            }).orElse(ResponseEntity.notFound().build());
    }

    // 4. TRIP-AI DELETE PANNA
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteTrip(@PathVariable Long id) {
        userActivityRepository.deleteById(id);
        return ResponseEntity.ok("Trip deleted successfully");
    }
}