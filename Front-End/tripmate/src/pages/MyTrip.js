import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MyTrip.css";

function MyTrips() {
  const [trips, setTrips] = useState([]);
  const token = localStorage.getItem("token");

  // DATABASE-LA IRUNDHU DATA EDUPPATHARKU
  const fetchTrips = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/user/activity/my-trips", {
        headers: { Authorization: `Bearer ${token}` }
      });
      setTrips(res.data);
    } catch (err) {
      console.error("Fetch error", err);
    }
  };

  useEffect(() => {
    if (token) fetchTrips();
  }, [token]);

  // TRIP-AI DELETE PANNA
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this trip?")) {
      try {
        await axios.delete(`http://localhost:8080/api/user/activity/delete/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        alert("Trip deleted! ✅");
        fetchTrips(); // Refresh the list
      } catch (err) {
        alert("Delete failed ❌");
      }
    }
  };

  // BUDGET-AI MATTUM EDIT PANNA
  const handleEdit = async (trip) => {
    const newBudget = prompt("Enter new budget for " + trip.tripPlace + ":", trip.budget);
    if (newBudget && newBudget !== trip.budget) {
      try {
        await axios.put(`http://localhost:8080/api/user/activity/update/${trip.id}`, 
          { ...trip, budget: Number(newBudget) },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        alert("Budget updated! ✅");
        fetchTrips();
      } catch (err) {
        alert("Update failed ❌");
      }
    }
  };

  return (
    <div className="my-trips-container">
      <h2>My Saved Trips</h2>
      <div className="trips-table-wrapper">
        {trips.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Place</th>
                <th>Budget (₹)</th>
                <th>Travel Dates</th>
                <th>Saved On</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {trips.map((t) => (
                <tr key={t.id}>
                  <td>{t.tripPlace}</td>
                  <td className="budget-text">₹{t.budget}</td>
                  <td>{t.startDate} to {t.endDate}</td>
                  <td className="date-text">{t.savedDate} | {t.savedTime}</td>
                  <td>
                    <button className="btn-edit" onClick={() => handleEdit(t)}>Edit</button>
                    <button className="btn-delete" onClick={() => handleDelete(t.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="no-trips">No trips found. Start planning now!</p>
        )}
      </div>
    </div>
  );
}

export default MyTrips;