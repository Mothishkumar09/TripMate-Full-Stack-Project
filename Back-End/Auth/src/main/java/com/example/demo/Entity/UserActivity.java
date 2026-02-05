package com.example.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class UserActivity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;        // User ID (Backend-la set pannuvom)
    private String userEmail;   // User Email (Backend-la set pannuvom)
    private String tripPlace;   // Frontend-la irundhu varum
    private String startDate;   // Frontend-la irundhu varum
    private String endDate;     // Frontend-la irundhu varum
    private Double budget;      // Frontend-la irundhu varum
    
    private String savedDate;   // System Date
    private String savedTime;   // System Time
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getUserId() {
		return userId;
	}
	public void setUserId(Long userId) {
		this.userId = userId;
	}
	public String getUserEmail() {
		return userEmail;
	}
	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}
	public String getTripPlace() {
		return tripPlace;
	}
	public void setTripPlace(String tripPlace) {
		this.tripPlace = tripPlace;
	}
	public String getStartDate() {
		return startDate;
	}
	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}
	public String getEndDate() {
		return endDate;
	}
	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}
	public Double getBudget() {
		return budget;
	}
	public void setBudget(Double budget) {
		this.budget = budget;
	}
	public String getSavedDate() {
		return savedDate;
	}
	public void setSavedDate(String savedDate) {
		this.savedDate = savedDate;
	}
	public String getSavedTime() {
		return savedTime;
	}
	public void setSavedTime(String savedTime) {
		this.savedTime = savedTime;
	}

}