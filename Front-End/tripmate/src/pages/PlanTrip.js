import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PlanTrip.css";

function PlanTrip() {
  const [tripScope, setTripScope] = useState("domestic");
  const [travelStyle, setTravelStyle] = useState("budget");

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState("India");
  const [selectedState, setSelectedState] = useState("");

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [persons, setPersons] = useState(1);
  const [budget, setBudget] = useState("");

  const [result, setResult] = useState(null);

  /* ===============================
      INDIA STATE GROUPS
  =============================== */
  const INDIA_GROUPS = {
    low: [
      "Bihar","Uttar Pradesh","Jharkhand","Odisha","Chhattisgarh",
      "Assam","Manipur","Meghalaya","Mizoram","Tripura","Nagaland"
    ],
    mid: [
      "Tamil Nadu","Kerala","Andhra Pradesh","Telangana","West Bengal",
      "Madhya Pradesh","Rajasthan","Punjab","Haryana",
      "Uttarakhand","Himachal Pradesh"
    ],
    high: [
      "Goa","Maharashtra","Karnataka","Gujarat",
      "Delhi","Sikkim","Arunachal Pradesh"
    ]
  };

  /* ===============================
      FETCH COUNTRIES + STATES (Axios)
  =============================== */
  useEffect(() => {
    axios
      .get("https://countriesnow.space/api/v0.1/countries/states")
      .then((res) => {
        const data = res.data.data || [];
        setCountries(data);

        const india = data.find((c) => c.name === "India");
        if (india) setStates(india.states || []);
      })
      .catch((err) => console.error("Country API Error", err));
  }, []);

  const handleCountryChange = (name) => {
    setSelectedCountry(name);
    setSelectedState("");
    const country = countries.find((c) => c.name === name);
    setStates(country ? country.states : []);
  };

  /* ===============================
      PER DAY COST LOGIC
  =============================== */
  const getPerDayCost = () => {
    if (tripScope === "international") {
      if (travelStyle === "budget") return 8000;
      if (travelStyle === "mid") return 12000;
      return 20000;
    }

    let group = "mid";
    if (INDIA_GROUPS.low.includes(selectedState)) group = "low";
    if (INDIA_GROUPS.high.includes(selectedState)) group = "high";

    if (travelStyle === "budget") {
      return group === "low" ? 2000 : group === "mid" ? 3000 : 4000;
    }
    if (travelStyle === "mid") {
      return group === "low" ? 3500 : group === "mid" ? 5000 : 6500;
    }
    return group === "low" ? 6000 : group === "mid" ? 8000 : 10000;
  };

  /* ===============================
      CALCULATE TRIP
  =============================== */
  const calculateTrip = () => {
    if (!selectedState || !startDate || !endDate || !budget) {
      alert("Fill all fields");
      return;
    }

    const days = (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24) + 1;

    if (days <= 0) {
      alert("Invalid dates");
      return;
    }

    const perDay = getPerDayCost();
    const required = perDay * persons * days;

    setResult({
      days,
      perDay,
      required,
      possible: Number(budget) >= required
    });
  };

  /* ===============================
      SAVE TRIP (JWT TOKEN + DYNAMIC DATA)
  =============================== */
  const saveTrip = async () => {
    if (!result) {
      alert("Calculate trip first");
      return;
    }

    const token = localStorage.getItem("token"); 

    if (!token) {
      alert("Please login first! Token not found.");
      return;
    }

    // Inga dhaan dynamic data-vai backend-kku anupuroam
    const payload = {
      tripPlace: `${selectedState}, ${selectedCountry}`, 
      startDate: startDate,
      endDate: endDate,
      budget: Number(budget)
    };

    try {
      // Backend controller-la '/save' endpoint path-ai correct-ah match panniruken
const response = await axios.post("http://localhost:8080/api/user/activity/save", payload, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
});
      
      console.log("Success:", response.data);
      alert("Trip saved successfully ✅");
    } catch (err) {
      console.error("Save error", err);
      if (err.response && err.response.status === 403) {
        alert("Session Expired or Unauthorized! Please login again.");
      } else {
        alert("Backend error while saving: " + (err.response?.data?.message || "Unknown error"));
      }
    }
  };

  return (
    <div className="plan-trip">
      <h2>Plan Your Trip</h2>

      <div className="form-grid">
        <div>
          <label>Trip Scope</label>
          <select
            value={tripScope}
            onChange={(e) => {
              setTripScope(e.target.value);
              setSelectedState("");
              setResult(null);
              if (e.target.value === "domestic") {
                setSelectedCountry("India");
                const india = countries.find((c) => c.name === "India");
                setStates(india ? india.states : []);
              } else {
                setSelectedCountry("");
                setStates([]);
              }
            }}
          >
            <option value="domestic">Domestic (India)</option>
            <option value="international">International</option>
          </select>
        </div>

        <div>
          <label>Travel Style</label>
          <select value={travelStyle} onChange={(e) => setTravelStyle(e.target.value)}>
            <option value="budget">Budget</option>
            <option value="mid">Mid Range</option>
            <option value="luxury">Luxury</option>
          </select>
        </div>

        {tripScope === "international" && (
          <div>
            <label>Country</label>
            <select value={selectedCountry} onChange={(e) => handleCountryChange(e.target.value)}>
              <option value="">Select Country</option>
              {countries.map((c, i) => (
                <option key={i} value={c.name}>{c.name}</option>
              ))}
            </select>
          </div>
        )}

        <div>
          <label>State / Region</label>
          <select value={selectedState} onChange={(e) => setSelectedState(e.target.value)}>
            <option value="">Select</option>
            {tripScope === "domestic"
              ? Object.values(INDIA_GROUPS).flat().map((s, i) =>
                  <option key={i} value={s}>{s}</option>
                )
              : states.map((s, i) =>
                  <option key={i} value={s.name}>{s.name}</option>
                )
            }
          </select>
        </div>

        <div>
          <label>Start Date</label>
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        </div>

        <div>
          <label>End Date</label>
          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        </div>

        <div>
          <label>No. of Persons</label>
          <input type="number" min="1" value={persons}
            onChange={(e) => setPersons(e.target.value)} />
        </div>

        <div>
          <label>Total Budget (INR)</label>
          <input type="number" value={budget} onChange={(e) => setBudget(e.target.value)} />
        </div>
      </div>

      <div className="btn-group">
        <button className="btn" onClick={calculateTrip}>Calculate Trip</button>
        <button className="btn secondary" onClick={saveTrip}>Save Trip</button>
      </div>

      {result && (
        <div className="result">
          <p><b>Days:</b> {result.days}</p>
          <p><b>Per Day:</b> ₹{result.perDay}</p>
          <p><b>Total Required:</b> ₹{result.required}</p>
          {result.possible
            ? <p className="success">✅ Trip Possible</p>
            : <p className="error">❌ Budget Not Enough</p>}
        </div>
      )}
    </div>
  );
}

export default PlanTrip;