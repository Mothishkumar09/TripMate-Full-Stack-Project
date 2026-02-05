import React from "react";
import { useParams } from "react-router-dom";
import "./PlaceDetails.css";

function PlaceDetails() {
  const { id } = useParams();

  // 🔹 STATIC DATA FOR ALL PLACES
  const placesData = {
    goa: {
      name: "Goa Beach",
      description:
      "Goa is India's smallest state, famed for its stunning beaches, Portuguese colonial history, unique Indo-Portuguese culture, and vibrant atmosphere, blending relaxed coastal life with bustling tourism, historic churches, and rich cuisine",
      activities:["Parasailing","Jet Skiing","Scuba Diving","Flyboarding","Dolphin Spotting","Beach Shacks"],
      budget:[ 
      "₹10,000(budget) to ₹50,000+ (luxury) per person Budget Breakdown (Per Person, Per Day Estimates)",
      <h3>Budget Traveler (₹1,500 - ₹2,500/day)</h3>,
      "Stay: Hostels/Guesthouses (₹500-₹1,000).",
      "Food: Local shacks/thalis (₹400-₹800).",
      "Transport: Scooter/Public Bus (₹200-₹400)",
      "Activities: Free beaches, cheap markets, occasional water sport.",

      <h3>Mid-Range Traveler (₹3,500 - ₹6,000/day).</h3>,
      "Stay: Hotels/Resorts (₹2,000-₹5,000).",
      "Food: Mix of local and tourist spots (₹1,000-₹1,500).",
      "Transport: Scooter/Shared Taxis (₹500-₹800).",
      "Activities: Water sports, boat trips, nightlife.",

      <h3>Luxury Traveler (₹8,000+/day)</h3>,
      "Stay: Luxury Resorts (₹5,000+).",
      "Food: Fine dining, premium shacks (₹2,000+).",
      "Transport: Private cabs, premium rentals.",
      "Activities: Premium experiences, private tours. ",],
      bestTime: "November to February is peak season for pleasant weather, beaches, and parties (Sunburn, New Year), while June to September (monsoon) is great for lush greenery, fewer crowds, and budget deals, and March to May offers hot, sunny days with good deals before the rains",
      stay: ["Budget/Hostels: Zostel, The Yellow House, various guesthouses; found in North Goa. ",
        "Mid-Range/Boutique: Estrela Do Mar Beach Resort, Casa De Goa, Novotel.",
        "Luxury (5-Star): Grand Hyatt, W Goa, Taj properties (Fort Aguada, Holiday Village), The Leela Goa, Alila Diwa."],
    },

    thailand: {
      name: "Thailand",
      description:
        "Thailand's beaches are world-renowned for their stunning beauty, featuring soft white sands, turquoise waters, and dramatic limestone cliffs, offering everything from lively party scenes (like parts of Phuket) to tranquil, secluded coves with vibrant marine life for snorkeling and diving, with iconic spots like Railay Beach, Maya Bay, and Koh Lipe epitomizing this tropical paradise ideal for relaxation, watersports, and cultural immersion. ",
      activities: ["Diving & Snorkeling", "Jet Skiing & Parasailing", "Stand-Up Paddleboarding (SUP)", "Temple Visits", "Island Hopping", "Rock Climbing"],
      budget:[ "A Thailand trip from India can range from budget (₹35k-₹50k) to luxury (₹1.2L+) for 7 days",
      <h3>Daily Budget Estimates (Per Person) (excluding flights) </h3>,
      "Budget Traveler: ₹5,000 – ₹7,000/day (Hostels, street food, local buses).",
      "Mid-Range Traveler: ₹8,000 – ₹15,000/day (3-4 star hotels, mix of cafes/restaurants, taxis).",
      "Luxury Traveler: ₹20,000+/day (Resorts, fine dining, private transport).",
      
      <h3>Cost Breakdown (Approximate per day/night)</h3>,
      <h5>Flights (Round Trip):</h5>,"₹15,000 – ₹45,000+ (Book early!).",
      <h5>Accommodation (Per Night):</h5>,
      "Budget: ₹800 – ₹2,000 (Hostels/Guesthouses),",
      "Mid-Range: ₹3,000 – ₹6,000 (3-4 Star Hotels).",
      "Luxury: ₹8,000+ (Resorts).",
      <h5>Food (Per Day):</h5>,
      "Budget: ₹300 – ₹1,000 (Street food is very affordable!).",
      "Mid-Range: ₹1,000 – ₹3,000 (Cafes, casual dining).",
      <h5>Local Transport & Activities (Per Day):</h5>, "₹500 – ₹2,000 (Depends on travel style: Tuk-tuks, Grab, rentals). ",    
    ],
      bestTime:[ <p>Cool & Dry Season (November - February)</p>,<p>Hot Season (March - May)</p>,<p>Rainy/Green Season (June - October)</p>,],
      stay: [<h3>Budget Stays (₹800 - ₹2,000/night)</h3>,<p>Hostels, guesthouses, basic bungalows.</p>,
       <h3>Mid-Range Stays (₹3,000 - ₹6,000/night)</h3>,<p>3-4 star hotels, boutique hotels, comfortable resorts.</p>,
       <h3>Luxury Stays (₹8,000 - ₹20,000+/night)</h3>,<p>4-5 star hotels, private pool villas, luxury resorts.</p>
      ],
    },

    bali: {
      name: "Bali",
      description:
        "Bali, Indonesia's 'Island of the Gods', is a world-renowned destination famous for its unique blend of stunning nature (volcanoes, lush rice paddies, beautiful beaches) and rich, deeply spiritual Hindu culture, offering a vibrant mix of ancient traditions, vibrant arts, warm hospitality, and modern tourism.",
      activities: ["Surfing", "Temple Visits", "Yoga Retreats", "Waterfalls", "Ubud Monkey Forest", "Rice Terraces", "Beach Clubs", "Dance Shows"],
      budget: ["In Bali, daily costs in INR range from Budget (₹2,000-₹4,000) with hostels/guesthouses, local food (warungs), and scooters to Luxury (₹15,000+) with resorts/villas",
      <h3>Budget Traveler (₹2,000 - ₹4,000/day)</h3>,
      <p>Accommodation: Hostels, basic guesthouses (₹500 - ₹2,000/night).</p>,
      <p>Food: Local eateries (warungs), street food (₹500 - ₹1,000/day).</p>,
      <p>Transport: Scooter rental, Grab/Gojek.</p>,
      <p>Activities: Temple visits, free beaches, local markets. </p>,

      <h3>Mid-Range Traveler (₹5,000 - ₹10,000/day)</h3>,
      <p>Accommodation: 3-4 star hotels, comfortable villas (₹3,000 - ₹7,000/night).</p>,
      <p>Food: Mix of local and cafe dining (₹1,500 - ₹3,000/day).</p>,
      <p>Transport: Taxis, private drivers for day trips.</p>,
      <p>Activities: Yoga, surf lessons, entrance fees, day tours. </p>,

      <h3>Luxury Traveler (₹15,000+/day)</h3>,
      <p>Accommodation: 5-star resorts, private pool villas (₹10,000 - ₹20,000+/night).</p>,
      <p>Food: Fine dining, international cuisine (₹3,000 - ₹8,000+/day).</p>,
      <p>Transport: Private drivers, premium transport.</p>,
      <p>Activities: Spa treatments, exclusive tours, private boat trips, fine dining. </p>,
      ],
      bestTime: "The best time to visit Bali is during the dry season, from April to October,  with May, June, and September offering the best balance of great weather, fewer crowds, and lower prices than the peak months of July and August.",
      stay: [<h3>Budget (Under ₹2,000/night)</h3>,
        <p>Hostels, basic guesthouses, homestays.</p>,
        <h3>Mid-Range (₹2,000 - ₹8,000/night)</h3>,
        <p>Boutique hotels, 3-4 star resorts, villas.</p>,
        <h3>Luxury (₹10,000+/night)</h3>,
        <p>5-star resorts, private pool villas.</p>
      ],
    },

    hawaii: {
      name: "Hawaii",
      description:
        "Hawaii is a U.S. island state in the Pacific, famous for its stunning volcanic landscapes, unique Polynesian culture, diverse ecosystems, and ideal tropical climate, offering beautiful beaches, surf, and a blend of ancient traditions with modern life, all centered around a chain of volcanic islands like the Big Island, Oahu, Maui, and Kauai. ",
      activities: ["Volcano Tours", "Surfing", "Hiking", "Whale Watching", "Glass Bottom Boats & Sunset Cruises", "manta ray night dives", "Pearl Harbor"],
      budget:["A Hawaii trip from India ranges from budget (₹12k-₹20k/day) with hostels/street food to luxury (₹25k+/night for resorts, ₹4k+/meal)",
      <h3>Budget-Friendly (INR 12,000 - 20,000+ per person/day)</h3>,
      <p>Accommodation: Hostels, budget hotels (₹3,000-₹5,000/night).</p>,
      <p>Food: Street food, casual eats (₹800-₹1,200/meal).</p>,
      <p>Transport: Public transport, shared rides.</p>,
      <p>Activities: Free beaches, hiking, self-guided tours.</p>,  

      <h3>Mid-Range (INR 20,000 - 35,000+ per person/day) </h3>,
      <p>Accommodation: 3-star hotels, comfortable resorts (₹8,000-₹12,000/night).</p>,
      <p>Food: Mix of casual and mid-range restaurants (₹1,500-₹2,500/meal).</p>,
      <p>Transport: Rental car, ride-shares.</p>,
      <p>Activities: Paid excursions, cultural sites. </p>,

      <h3>Luxury (INR 40,000 - 1 Lakh+ per person/day)</h3>,
      <p>Accommodation: 4-5 star beachfront resorts (₹25,000+/night).</p>,
      <p>Food: Fine dining, gourmet experiences (₹4,000+/meal).</p>,
      <p>Transport: Premium rentals, private transfers.</p>,
      <p>Activities: Helicopter tours, private luaus, premium experiences. </p>,
      ],
      bestTime: "April-June (Spring) and September-October (Autumn)",
      stay: [<h3>Budget-Friendly Stays (Approx. ₹8,000 - ₹15,000+ /night)</h3>,
        <p>Hostels, guesthouses, Airbnb/VRBO rentals, budget hotels.</p>,
        <h3>Mid-Range Stays (Approx. ₹15,000 - ₹30,000+ /night)</h3>,
        <p>Standard hotels, family resorts, condos.</p>,
        <h3>Luxury Stays (₹30,000 - ₹1,00,000+ /night)</h3>,
        <p>Five-star resorts, boutique hotels, oceanfront suites.</p>,
      ],
    },

    whitehaven: {
      name: "Whitehaven Beach",
      description:
        "Whitehaven Beach, on Whitsunday Island, Australia, is world-renowned for its dazzlingly white, 98% pure silica sand that's soft and cool underfoot, meeting crystal-clear turquoise waters, especially stunning at Hill Inlet where tides create swirling sand and water patterns.",
      activities: ["Swimming", "Boat Cruise", "Water Sports", "Camping", "Snorkeling & Diving", "Hill Inlet Lookout"],
      budget: ["Whitehaven Beach costs vary from budget (around ₹9,500-₹13,000 for basic tours) to luxury (₹20,000+ for private charters/seaplanes)",
        <h3>Budget-Friendly (₹9,000 - ₹15,000 per person) </h3>,
        <p>Half/Full-Day Tours: Basic boat tours from Airlie Beach offer great value.</p>,
        <p>Ocean Rafting: Fast, thrilling rides to Whitehaven & Hill Inlet with snorkeling options.</p>,
        <p>Catamaran Day Sails: Enjoy sailing with a stop at the beach.</p>,
        <p>Budget Hotels: Look for deals in Airlie Beach. </p>,

        <h3>Mid-Range (₹15,000 - ₹25,000+ per person)</h3>,
        <p>Sailing Adventures: Multi-day trips (like on Matador), offering more island exploration.</p>,
        <p>Premium Day Trips: Tours with BBQ lunches, more snorkeling, and better vessels (e.g., Lady Enid).</p>,
        <p>Resort Stays: Mid-range options in the Whitsundays. </p>,

        <h3>Luxury (₹25,000+ per person/experience)</h3>,
        <p>Seaplane/Helicopter Tours: Fly over the islands for unparalleled views and beach access.</p>,
        <p>Private Charters: Exclusive boat experiences.</p>,
        <p>Luxury Resorts: Stays on Hamilton Island or boutique Whitsunday Island resorts. </p>,
      ],
      bestTime: "The best time to visit Whitehaven Beach is during Australia's dry season, from May to September",
      stay: [<h3>Budget (₹5,000 - ₹15,000 INR/night)</h3>,
        <p>The main hub for Whitsundays tours, offering hostels (like Magnums or Nomads) and basic motels for cheaper lodging before/after tours.</p>,
        <h3>Mid-Range (₹15,000 - ₹40,000 INR/night)</h3>,
        <p>Options like Reef View Hotel or Palm Bungalows offer good amenities without the top-tier price tag.</p>,
        <h3>Luxury (₹40,000+ INR/night)</h3>,
        <p>A true luxury escape with premium amenities and dining.</p>,
      ],
    },
        /* ================= ISLANDS ================= */
    maldives: {
      name: "Maldives",
      description:
        "The Maldives is an archipelagic nation in the Indian Ocean, famous for its stunning coral atolls, white-sand beaches, and clear turquoise waters.",
      activities: ["Snorkeling", "Scuba Diving", "Sunset Cruise", "Big Game Fishing", "Dolphin Cruises", "Sandbank Picnics", "Sandbank Picnics", "island hopping"],
      budget:[ "A Maldives trip can range from budget (₹10,000/day) on local islands with guesthouses and local food to extreme luxury (₹1,00,000+/day)",
      <h3>Budget (INR per day per person)</h3>,  
      <p>Accommodation: ₹3,000 - ₹10,000 (Guesthouses on local islands like Maafushi).</p>,
      <p>Food: ₹1,500 - ₹3,000 (Local eateries, basic meals).</p>,
      <p>Activities/Transfers: ₹2,000 - ₹5,000 (Local ferries, basic snorkeling).</p>,
      <p>Total: ~₹10,000 - ₹18,000. </p>,

      <h3>Mid-Range (INR per day per person)</h3>,
      <p>Accommodation: ₹10,000 - ₹30,000 (Beach villas, 3-4 star resorts).</p>,
      <p>Food: ₹4,000 - ₹8,000 (Resort restaurants, varied dining).</p>,
      <p>Activities/Transfers: ₹5,000 - ₹15,000 (Water sports, island hopping).</p>,
      <p>Total: ~₹20,000 - ₹50,000+. </p>,

      <h3>Luxury (INR per day per person)</h3>,
      <p>Accommodation: ₹50,000 - ₹2,00,000+ (Overwater villas, 5-star resorts, private pools).</p>,
      <p>Food: ₹8,000 - ₹15,000+ (Fine dining, premium drinks).</p>,
      <p>Activities/Transfers: ₹10,000 - ₹20,000+ (Seaplanes, private excursions, spa treatments).</p>,
      <p>Total: ₹1,00,000+. </p>,
      ],
      bestTime: "The best time to visit the Maldives is during the dry season, from December to April, For budget travelers or surfers, the wet season (May-November) brings lower costs, fewer crowds, and great waves, despite occasional rain, with shoulder months like October-November ideal for spotting mantas/whale sharks. ",
      stay: [<h3>Budget-Friendly (₹2,000 - ₹10,000+)</h3>,
        <p>Stay in guesthouses on islands like Maafushi (Kaani Palm Beach, Off Day Inn), Fulidhoo, or Thulusdhoo for authentic experiences.</p>,
        <h3>Mid-Range & Value Resorts (₹15,000 - ₹40,000+)</h3>,
        <p>Kurumba Maldives, Sun Siyam Iru Fushi, Villa Nautica (Paradise Island), Meeru Island, Centara Ras Fushi.</p>,
        <h3>Luxury & Ultra-Luxury (₹70,000 - ₹10 Lakhs+)</h3>,
        <p>JW Marriott, The Westin Miriandhoo, Kudadoo Private Island, Conrad Maldives Rangali Island, Siyam World, Ananea Madivaru.</p>,
      ],
    },

    andaman: {
      name: "Andaman Islands",
      description:
        "Andaman Islands are a tropical archipelago in the Bay of Bengal, part of India's Andaman & Nicobar Union Territory, famous for stunning white-sand beaches, turquoise waters, rich coral reefs, dense rainforests with diverse flora/fauna, and unique tribal cultures, offering pristine natural beauty and adventure activities like snorkeling and diving, with Port Blair as the capital and Saddle Peak as the highest point. ",
      activities: ["Radhanagar Beach (Havelock)", "Elephant Beach (Havelock)", "Night Activities", "Cellular Jail (Port Blair)", "Limestone Caves (Baratang)", "Ross Island (Netaji Subhash Chandra Bose Island)"],
      budget: ["Andaman Islands offers a diverse budget from roughly ₹4,500-₹7,000/day (Budget) to ₹19,000+/day (Luxury) per person",
        <h3>Budget Traveler (₹4,500 - ₹7,000/day)</h3>,
        <p>Accommodation: ₹1,500 - ₹2,500 (Guesthouses, basic hotels).</p>,
        <p>Food: ₹1,000 - ₹1,500 (Local eateries, street food).</p>,
        <p>Activities/Transport: ₹2,000 - ₹3,000 (Local ferries, shared taxis, budget water sports). </p>,

        <h3>Mid-Range Traveler (₹8,000 - ₹15,000/day)</h3>,
        <p>Accommodation: ₹3,000 - ₹7,000 (Comfortable resorts like TSG or similar).</p>,
        <p>Food: ₹2,000 - ₹3,000 (Mix of local & tourist restaurants).</p>,
        <p>Activities/Transport: ₹3,000 - ₹5,000 (Private ferries, scuba diving, private tours). </p>,

        <h3>Luxury Traveler (₹19,000+/day)</h3>,
        <p>Accommodation: ₹8,000 - ₹40,000+ (Luxury resorts like Barefoot at Havelock, SeaShell, Taj).</p>,
        <p>Food: ₹4,000+ (Fine dining, resort meals).</p>,
        <p>Activities/Transport: ₹7,000+ (Seaplane, private charters, exclusive experiences). </p>,
      ],
      bestTime: "The best time to visit the Andaman Islands is from October to May (winter/peak season) for pleasant weather, clear skies, and ideal conditions for water sports like diving and snorkeling, with November to March being the prime period for comfortable exploration. ",
      stay: [<h3>Budget Stays (₹1,000 - ₹3,500/night)</h3>,
        <p>Basic, clean rooms, often in guesthouses or smaller resorts, good for backpackers.</p>,
        <h3>Mid-Range Stays (₹4,000 - ₹8,000/night)</h3>,
        <p>Comfortable rooms, better amenities (pools, restaurants).</p>,
        <h3>Luxury Stays (₹10,000+/night)</h3>,
        <p>Premium experiences, private beaches, spas, fine dining.</p>,
      ],
    },

    borabora: {
      name: "Bora Bora",
      description:
        "Bora Bora is a lush French Polynesian paradise known for its iconic overwater bungalows, crystal-clear turquoise lagoon, and Mount Otemanu, offering secluded luxury and water activities.",
      activities: ["(Snorkeling with sharks", "Jet-Skiing", "Sunset Cruises", " Mount Otemanu exploration", "Volcanic Experiences"],
      budget:["₹Bora Bora ranges from costly to extremely luxurious in INR, with budget stays (guesthouses/Airbnb) starting around ₹5,000-₹12,000/night (excluding flights)",
        <h3>Budget-Friendly (₹5,000 - ₹15,000/day)</h3>,
        <p>Accommodation: Guesthouses, family stays, or Airbnb on the main island (not motus) are your best bet, often ₹5,000-₹8,000/night.</p>,
        <p>Food: Cook your own meals from supermarkets (like Vaitape) for snacks, breakfast, and some dinners; buy local produce.</p>,
        <p>Activities: Focus on free beach time, snorkeling near shore, and exploring Vaitape.</p>,
        <p>Cost Estimate (excluding flights/transfers): ₹5,000 - ₹15,000/day (for 1-2 people, focused on self-sufficiency). </p>,

        <h3>Mid-Range (₹30,000 - ₹80,000/day)</h3>,
        <p>Accommodation: Resorts like Intercontinental Le Moana or similar, with standard rooms or bungalows.</p>,
        <p>Food: Mix of resort dining and local eateries; some excursions might include meals.</p>,
        <p>Activities: Half-day tours, jet ski rentals, exploring nearby islets.</p>,
        <p>Cost Estimate (excluding flights/transfers): ₹30,000 - ₹80,000/day (for 1-2 people). </p>,

        <h3>Luxury (₹100,000 - ₹250,000+/day)</h3>,
        <p>Accommodation: Overwater bungalows at St. Regis, Four Seasons, Conrad, or Le Bora Bora by Pearl Resorts.</p>,
        <p>Food: Fine dining at resorts, cocktails, and private dining experiences.</p>,
        <p>Activities: Private boat tours, spa treatments, diving with manta rays, shark encounters.</p>,
        <p>Cost Estimate (excluding flights/transfers): ₹100,000 - ₹250,000+/day (for 1-2 people). </p>,

      ],
      bestTime: "The best time to visit Bora Bora is during its dry season (May to October) for sunny",
      stay: [<h3>Budget-Friendly (₹10,000 - ₹30,000+)</h3>,
        <p>Maitai Polynesia Bora Bora, Sunset Hill Lodge/Bora Bora Holiday's Lodge, Village Temanuata/Royal Bora Bora, Bora Vaite Lodge</p>,
        <h3>Mid-Range to Luxury (₹40,000 - ₹1,00,000+)</h3>,
        <p>InterContinental Bora Bora Le Moana Resort, InterContinental Bora Bora Resort & Thalasso Spa, The Westin Bora Bora Resort & Spa</p>,
        <h3>Ultra-Luxury (₹1,00,000 - ₹2,00,000+)</h3>,
        <p>Four Seasons Resort Bora Bora, The St. Regis Bora Bora Resort, Conrad Bora Bora Nui</p>
      ],
    },

    palawan: {
      name: "Palawan",
      description:
        "Palawan is a Philippine archipelago known as the 'Last Frontier', famous for its breathtaking natural beauty, including pristine beaches, crystal-clear waters, limestone cliffs, and rich biodiversity.",
      activities: ["island hopping in El Nido", "Kayangan Lake", "Puerto Princesa Underground River", "Port Barton", "Honda Bay (Puerto Princesa)", "Firefly Watching"],
      budget: ["For Palawan, expect daily costs from roughly ₹3,000 (Budget), focusing on hostels/local eats, up to ₹10,000-₹15,000+ (Mid-Range/Luxury) for resorts",
        <h3>Budget Traveler (Backpacker/Shoestring): ₹3,000 – ₹4,500/day </h3>,
        <p>Accommodation: Hostels or basic guesthouses (₹1,000 - ₹2,500/night).</p>,
        <p>Food: Local eateries (carinderias), street food (₹300 - ₹800/day).</p>,
        <p>Transport: Tricycles, local buses/ferries (budgeted within daily cost).</p>,
        <p>Activities: Group tours (Tours A, B, C, D in El Nido are popular), snorkeling (₹1,000 - ₹2,000/day for tours/entrance fees). </p>,

        <h3>Mid-Range Traveler (Comfortable): ₹6,000 – ₹10,000/day</h3>,
        <p>Accommodation: Mid-range hotels, boutique stays (₹3,000 - ₹8,000/night).</p>,
        <p>Food: Mix of local and tourist restaurants (₹1,000 - ₹2,000/day).</p>,
        <p>Transport: Private transfers for longer distances, more organized tours (budgeted within daily cost).</p>,
        <p>Activities: Private boat tours, diving, more exclusive experiences (₹2,000 - ₹4,000/day for activities). </p>,

        <h3>Luxury Traveler (Splurge): ₹12,000 – ₹25,000+/day </h3>,
        <p>Accommodation: Luxury resorts, private villas (₹10,000 - ₹20,000+/night).</p>,
        <p>Food: Fine dining, international cuisine (₹2,000 - ₹4,000+/day).</p>,
        <p>Transport: Seaplanes, private vans, premium transfers (budgeted within daily cost)</p>,
        <p>Activities: Private yacht charters, exclusive island experiences, spa treatments (₹5,000 - ₹10,000+/day for activities). </p>,
      ],
      bestTime: "3 Secrets to the Best Time to Visit PalawanThe best time to visit Palawan is during its dry season, from December to May, for sunny skies, calm seas perfect for island hopping in El Nido/Coron, and excellent visibility for diving",
      stay: [<h3>Budget Stays (Approx. ₹1,000 - ₹3,000 INR/Night)</h3>,
        <p>Budget Stays (Approx. ₹1,000 - ₹3,000 INR/Night) Guesthouses, hostels, basic homestays, and budget hotels.</p>,
        <h3>Mid-Range Stays (Approx. ₹3,000 - ₹8,000 INR/Night)</h3>,
        <p> Comfortable resorts, boutique hotels, beachfront bungalows with amenities.</p>,
        <h3>Luxury Stays (Approx. ₹15,000 - ₹100,000+ INR/Night)</h3>,
        <p>Private island resorts, 5-star hotels, exclusive villas.</p>
      ],
    },

    fiji: {
      name: "Fiji",
      description:
        "Fiji is famous for coral reefs, friendly locals, and island culture.",
      activities: ["Snorkeling", "Village Tours"],
      budget: "₹70,000 – ₹1,20,000 per person",
      bestTime: "May to October",
      stay: ["Island Resorts"],
    },
  };

  

  // 🔹 GET CURRENT PLACE
  const place = placesData[id];

  if (!place) {
    return <h2 style={{ textAlign: "center" }}>Place not found</h2>;
  }

  return (
    <div className="place-details">
      <h2>{place.name}</h2>

      <section>
        <h3>Description</h3>
        <p>{place.description}</p>
      </section>

      <section>
        <h3>Activities</h3>
        <ul>
          {place.activities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Budget (Per Person)</h3>
        <p>{place.budget}</p>
      </section>

      <section>
        <h3>Best Time to Visit</h3>
        <p>{place.bestTime}</p>
      </section>

      <section>
        <h3>Stay Options</h3>
        <ul>
          {place.stay.map((s, index) => (
            <li key={index}>{s}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default PlaceDetails;
