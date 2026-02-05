import React, { useState } from "react";
import "./Home.css";
import { FaGlobeAsia } from "react-icons/fa";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");

  /* =============================
     SEARCH → API PAGE
  ============================= */
  const handleSearch = () => {
    if (!searchText.trim()) return;
    navigate(`/search?place=${encodeURIComponent(searchText)}`);
  };

  return (
    <div className="home">

      {/* ========== NAVBAR ========== */}
      <header className="navbar">
        <div className="logo">
          <FaGlobeAsia className="logo-icon" />
          <span>TripMate</span>
        </div>

        <nav className="navbar1">
          <span onClick={() => navigate("/plantrip")}>Plan a Trip  </span>
          <span onClick={() => navigate("/mytrip")}>MyTrip</span>
          <span onClick={() => navigate("/blog")}>Blog</span>
          <span onClick={() => navigate("/profile")}>Profile</span>
          <span onClick={() => navigate("/settings")}>Settings</span>
        </nav>

        <button
          className="logout-btn"
          onClick={() => navigate("/login")}
        >
          Logout
        </button>
      </header>

      {/* ========== HERO SECTION ========== */}
      <section className="hero">
        <h1>
          Plan Your Perfect Trip <br />
          <span>with TripMate</span>
        </h1>

        <p>
          Discover amazing places and plan your dream journey effortlessly
        </p>

        {/* SEARCH BAR */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Search places worldwide..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button onClick={handleSearch}>Find Trips</button>
        </div>
      </section>

      {/* ========== CATEGORIES (NO API) ========== */}
      <section className="categories">
        <h2 className="cat-title">Explore Categories</h2>

        <div className="cat-grid">
          <div
            className="cat-card"
            onClick={() => navigate("/category/beach")}
          >
            <img src="/images/beach.jpg" alt="Beach" />
            <span>Beach & Islands</span>
          </div>

          <div
            className="cat-card"
            onClick={() => navigate("/category/mountains")}
          >
            <img src="/images/everest.jpg" alt="Mountains" />
            <span>Mountains & Nature</span>
          </div>

          <div
            className="cat-card"
            onClick={() => navigate("/category/heritage")}
          >
            <img src="/images/heritage.jpg" alt="Heritage" />
            <span>Heritage & Culture</span>
          </div>

          <div
            className="cat-card"
            onClick={() => navigate("/category/city")}
          >
            <img src="/images/london.jpg" alt="City" />
            <span>City Tours</span>
          </div>
        </div>
      </section>

      {/* ========== TOP DESTINATIONS (API OK) ========== */}
      <section className="destinations">
        <h2>Top Destinations</h2>

        <div className="dest-grid">

          <div
            className="dest-card"
            onClick={() => navigate("/search?place=Paris")}
          >
            <img src="/images/paris.jpg" alt="Paris" />
            <span>Paris</span>
          </div>

          <div
            className="dest-card"
            onClick={() => navigate("/search?place=London")}
          >
            <img src="/images/london.jpg" alt="London" />
            <span>London</span>
          </div>

          <div
            className="dest-card"
            onClick={() => navigate("/search?place=Maldives")}
          >
            <img src="/images/maldives2.jpg" alt="Maldives" />
            <span>Maldives</span>
          </div>

          <div
            className="dest-card"
            onClick={() => navigate("/search?place=Tokyo")}
          >
            <img src="/images/tokyo.jpg" alt="Tokyo" />
            <span>Tokyo</span>
          </div>

        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="footer">
        <p>© 2025 TripMate. All rights reserved.</p>

        <div className="footer-icons">
          <FaInstagram />
          <FaFacebookF />
          <FaXTwitter />
          <FaLinkedinIn />
          <MdEmail />
          <MdLocationOn />
        </div>
      </footer>
    </div>
  );
}

export default Home;
