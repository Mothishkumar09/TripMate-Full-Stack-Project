import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "./CategoryPage.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function CategoryPage() {
  const navigate = useNavigate();

  // Sample data
  const beaches = [
    { id: 1, name: "Goa Beach", slug: "goa", image: "/images/goa4.jpg" },
    { id: 2, name: "Thailand", slug: "thailand", image: "/images/thailand (2).jpg" },
    { id: 3, name: "Hawaii", slug: "hawaii", image: "/images/hawaii.jpg" },
    { id: 4, name: "Bali", slug: "bali", image: "/images/bali2.jpg" },
    { id: 5, name: "White Haven Beach", slug: "whitehaven", image: "/images/whitehaven.jpg" }
  ];

  const islands = [
    { id: 6, name: "Maldives", slug: "maldives", image: "/images/maldives.jpg" },
    { id: 7, name: "Andaman Islands", slug: "andaman", image: "/images/andaman.jpg" },
    { id: 8, name: "Bora Bora", slug: "borabora", image: "/images/bora.jpg" },
    { id: 9, name: "Palawan", slug: "palawan", image: "/images/palawan.webp" },
    { id: 10, name: "Fiji", slug: "fiji", image: "/images/fiji.jpg" }
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } }
    ]
  };

  const renderCarousel = (items) => (
    <Slider {...settings}>
      {items.map((place) => (
        <div
          key={place.id}
          className="place-card"
          onClick={() => navigate(`/place/${place.slug}`)}
        >
          <img src={place.image} alt={place.name} />
          <p>{place.name}</p>
        </div>
      ))}
    </Slider>
  );

  return (
    <div className="category-page">
      <h2 className="section-title">Beaches</h2>
      {renderCarousel(beaches)}

      <h2 className="section-title">Islands</h2>
      {renderCarousel(islands)}
    </div>
  );
}

export default CategoryPage;
