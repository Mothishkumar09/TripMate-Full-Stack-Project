import React from "react";
import { Link, useNavigate } from "react-router-dom"; // useNavigate add panniruken
import { FaArrowLeft } from "react-icons/fa"; // Icon-kaga
import "./Blog.css";

function Blog() {
  const navigate = useNavigate();

  const blogs = [
    { 
      id: 1, 
      title: "Hidden Gems of Tamil Nadu", 
      category: "Nature", 
      image: "https://www.indianpanorama.in/assets/images/tourpackages/banner/culture-of-tamil-nadu.webp", 
      description: "Explore the untouched beauty of Kolli Hills and the 70 hairpin bends that lead to paradise.", 
      date: "Dec 30, 2025" 
    },
    { 
      id: 2, 
      title: "Solo Trip to Gokarna", 
      category: "Beach", 
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80", 
      description: "A complete guide for solo travelers looking for peace, soulful sunsets, and beach treks.", 
      date: "Dec 28, 2025" 
    },
    { 
      id: 3, 
      title: "Budget Trip to North India", 
      category: "Budget", 
      image: "https://www.tourmyindia.com/socialimg/north-india-tourism.jpg", 
      description: "Plan your ultimate Golden Triangle trip to Delhi, Agra, and Jaipur under ₹15,000.", 
      date: "Dec 25, 2025" 
    }
  ];

  return (
    <div className="blog-container">
      {/* Back to Home Button */}
      <div className="top-nav-bar">
        <button onClick={() => navigate("/home")} className="back-home-btn">
          <FaArrowLeft /> Back to Home
        </button>
      </div>

      <div className="blog-header">
        <h1>Travel Tales & Guides</h1>
        <p>Discover stories and tips from travelers around the world</p>
      </div>
      
      <div className="blog-grid">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <div className="blog-image-wrapper">
              <img src={blog.image} alt={blog.title} className="blog-image" />
              <span className="blog-category">{blog.category}</span>
            </div>
            
            <div className="blog-content">
              <span className="blog-date">{blog.date}</span>
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
              
              <Link to={`/blog/${blog.id}`} className="read-more-link">
                Read More <span>→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;