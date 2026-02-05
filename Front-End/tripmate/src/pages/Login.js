import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../pages/Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Previous error-ai clear pannum

    try {
      // Backend Login API call
      const response = await axios.post("http://localhost:8080/api/auth/login", {
        email,
        password,
      });

      console.log("Backend Response:", response.data);

      /**
       * BACKEND FIX CHECK:
       * Namma AuthController ippo Map/JSON format-la data anupudhu.
       * So, response.data-kulla 'token' field irukkanum.
       */
      if (response.data && (response.data.token || response.data.jwtToken)) {
        const token = response.data.token || response.data.jwtToken;
        
        // MUKKIYAM: Token-ai LocalStorage-la save pannumbodhu thaan adhai mather page-la edukka mudiyum
        localStorage.setItem("token", token);
        
        console.log("Token saved successfully in LocalStorage!");
        navigate("/home");
      } 
      // Oruvelai backend innum string mattum anupuna (Safety check)
      else if (response.data === "Login successful") {
        alert("Warning: Backend is only sending a success string, not a JWT token. Check your AuthController.");
        navigate("/home");
      } else {
        setError("Invalid response format from server. Token not found.");
      }
    } catch (err) {
      if (err.response && err.response.data) {
        // Backend-la irundhu vara error message (Example: "Invalid Email or Password")
        const backendError = typeof err.response.data === 'string' 
          ? err.response.data 
          : (err.response.data.message || "Login Failed");
        setError(backendError);
      } else {
        setError("Server error! Please try again later.");
      }
      console.error("Full Login Error:", err);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} autoComplete="off">
          <input
            type="email"
            required
            placeholder="Email"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
          />
          <input
            type="password"
            required
            placeholder="Password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
          />
          <button type="submit" className="login-button">
            Login
          </button>
          {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
        </form>
        <p className="login-text">
          Don’t have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}