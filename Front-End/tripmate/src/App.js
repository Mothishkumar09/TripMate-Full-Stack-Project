import React, { useState, useEffect } from "react"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SplashScreen from "./components/SplashScreen";
import Login from "./pages/Login"; 
import Register from "./pages/Register"; 
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import CategoryPage from "./pages/CategoryPage";
import PlaceDetails from "./pages/PlaceDetails";
import PlanTrip from "./pages/PlanTrip";
import MyTrip from "./pages/MyTrip";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false); 
    }, 3000); 

    return () => clearTimeout(timer);
  }, []); 
  
  return (
    <Router>
      
      {showSplash && <SplashScreen />}
      {!showSplash && (
        <Routes>
          <Route path="/" element={<Login />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/category/:type" element={<CategoryPage />} />
          <Route path="/place/:id" element={<PlaceDetails />} />
          <Route path="/plantrip" element={<PlanTrip />} />
          <Route path="/mytrip" element={<MyTrip />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;