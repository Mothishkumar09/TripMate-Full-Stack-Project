import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./SearchResults.css";

// Unsplash API key
const UNSPLASH_KEY = "EabzBSJzcNPUs54uR2NO9gfe41LP92MoaEdE9gXBwW4";

function SearchResults() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const place = queryParams.get("place");

  const [placeImages, setPlaceImages] = useState([]);
  const [popularPlaces, setPopularPlaces] = useState([]);
  const [placeInfo, setPlaceInfo] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!place) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        // 1️⃣ Unsplash: Place Images
        const imgRes = await fetch(
          `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
            place
          )}&per_page=8&client_id=${UNSPLASH_KEY}`
        );
        const imgData = await imgRes.json();
        setPlaceImages(imgData.results || []);

        // 2️⃣ WikiVoyage: Popular Tourist Places
        const wikiVoyageRes = await fetch(
          `https://en.wikivoyage.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(
            place + " tourist attractions"
          )}&format=json&origin=*`
        );
        const wikiVoyageData = await wikiVoyageRes.json();
        const topPlaces = wikiVoyageData.query.search
          .slice(0, 4)
          .map((item) => item.title);

        // Get images for each popular place from Unsplash
        const popularWithImages = await Promise.all(
          topPlaces.map(async (p) => {
            const res = await fetch(
              `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
                p
              )}&per_page=1&client_id=${UNSPLASH_KEY}`
            );
            const data = await res.json();
            return {
              name: p,
              image:
                data.results?.[0]?.urls?.small ||
                "https://via.placeholder.com/400x300?text=No+Image",
            };
          })
        );
        setPopularPlaces(popularWithImages);

        // 3️⃣ MediaWiki: Place Summary / Info
        const mediaWikiRes = await fetch(
          `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(
            place
          )}&prop=extracts&exintro&explaintext&format=json&origin=*`
        );
        const mediaWikiData = await mediaWikiRes.json();
        const pages = mediaWikiData.query.pages;
        const summary =
          pages[Object.keys(pages)[0]]?.extract ||
          "No summary available for this place.";
        setPlaceInfo(summary);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
      setLoading(false);
    };

    fetchData();
  }, [place]);

  if (loading) return <p style={{ textAlign: "center" }}>Loading {place}...</p>;

  return (
    <div className="search-results-page">
      <h2>Explore {place}</h2>

      {/* Place Summary */}
      <p className="place-summary">{placeInfo}</p>

      {/* Main Images */}
      <div className="images-grid">
        {placeImages.map((img) => (
          <div key={img.id} className="image-card">
            <img src={img.urls.small} alt={img.alt_description} />
          </div>
        ))}
      </div>

      {/* Popular Tourist Places */}
      <h3>Popular Tourist Places in {place}</h3>
      <div className="popular-cards">
        {popularPlaces.map((p, i) => (
          <div key={i} className="popular-card">
            <img src={p.image} alt={p.name} />
            <p>{p.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
