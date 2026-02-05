import React from "react";
import { useParams, Link } from "react-router-dom";
import "./BlogDetails.css";

function BlogDetails() {
  const { id } = useParams();

  const blogData = {
    1: {
      title: "Hidden Gems of Tamil Nadu: Off the Beaten Path",
      fullDesc: `Tamil Nadu is a land of eternal beauty, and beyond the popular temples lies a world of untouched nature. One of the most breathtaking destinations is Kolli Hills, famous for its 70 continuous hairpin bends that challenge even the most experienced drivers. As you reach the top, the air turns misty and cool, leading you to the majestic Agaya Gangai waterfalls. 

      Another magnificent spot is Pichavaram, home to the world’s second-largest mangrove forest. Navigating through the narrow, sun-dappled water canals under a canopy of green leaves is a surreal experience. These locations offer a perfect escape for those looking to disconnect from city life and immerse themselves in the raw, authentic beauty of Southern India.`,
      image: "https://avathioutdoors.gumlet.io/travelGuide/dev/kolli-hills12911.jpg",
      tips: "Carry comfortable trekking shoes for Kolli Hills and prefer a guided rowboat at Pichavaram."
    },
    2: {
      title: "Solo Traveler's Paradise: Finding Peace in Gokarna",
      fullDesc: `If you are looking for the perfect blend of spirituality and beach vibes, Gokarna is the ultimate destination for solo travelers. Unlike the crowded beaches of Goa, Gokarna offers a soulful retreat. The famous "Beach Trek" is a must-do activity, where you can hike through rocky cliffs and lush hills to reach secluded spots like Half Moon Beach and Paradise Beach.

      Imagine waking up in a wooden shack at Om Beach, watching the golden sun dip into the Arabian Sea while listening to the rhythmic sound of the waves. It is safe, affordable, and incredibly welcoming for anyone traveling alone for the first time.`,
      image: "https://s7ap1.scene7.com/is/image/incredibleindia/om-beach-gokarna-karnataka-tri-hero?qlt=82&ts=1727164538227",
      tips: "Plan your visit between October and March. Stay in beach shacks for the best experience."
    },
    3: {
      title: "The Ultimate Budget Guide to Exploring North India",
      fullDesc: `Exploring the Golden Triangle—Delhi, Agra, and Jaipur—is a dream for many, and doing it on a budget makes it even more rewarding. Your journey begins in the heart of Delhi, where the ancient history of Old Delhi meets the modern sprawl of New Delhi. A visit to the majestic Taj Mahal in Agra is a soul-stirring experience. 

      Moving toward the 'Pink City' of Jaipur, you can explore the grand Amber Fort and the Hawa Mahal without spending a fortune by using public transport and staying in vibrant backpacker hostels. By opting for overnight trains and local eateries, you can experience the grandeur of Indian heritage while keeping your wallet happy.`,
      image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/13/ca/8b/3b.jpg",
      tips: "Use the IRCTC app to book sleeper class tickets and carry a valid ID for entry discounts."
    }
  };

  // IMPORTANT: Convert string id to Number
  const selectedBlog = blogData[Number(id)];

  if (!selectedBlog) {
    return (
      <div className="not-found-container">
        <h2>Oops! Blog Not Found</h2>
        <Link to="/blog" className="back-button">Back to Travel Tales</Link>
      </div>
    );
  }

  return (
    <div className="blog-details-wrapper">
      <div className="blog-details-container">
        <Link to="/blog" className="back-button">
          <span className="back-icon">←</span> Back to Travels
        </Link>
        
        <header className="details-header">
          <span className="category-tag">Travel Guide</span>
          <h1>{selectedBlog.title}</h1>
          <div className="meta-info">Published on Dec 30, 2025 • 5 min read</div>
        </header>

        <div className="hero-image-wrapper">
          <img src={selectedBlog.image} alt={selectedBlog.title} className="hero-image" />
        </div>

        <section className="details-body">
          <p className="description-paragraph">{selectedBlog.fullDesc}</p>
          
          <div className="pro-tips-card">
            <h3>💡 Pro Tips for your Journey</h3>
            <p>{selectedBlog.tips}</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default BlogDetails;