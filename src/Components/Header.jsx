

import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [showForm, setShowForm] = useState(false);
  const [showMap, setShowMap] = useState(false);

  // Function to toggle form visibility
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  // Function to toggle map visibility
  const toggleMap = () => {
    setShowMap(!showMap);
  };

  return (
    <div>
      <div
        className="nav"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          background: "#282c34",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
      >
        <GiHamburgerMenu
          className="header1"
          style={{ color: "#bdc3c7", fontSize: "3rem", cursor: "pointer" }}
          onClick={toggleForm}
        />
        <GiHamburgerMenu
          className="header2"
          style={{ color: "#bdc3c7", fontSize: "3rem", cursor: "pointer" }}
          onClick={toggleMap}
        />
      </div>

      {showForm && (
        <div
          style={{ margin: "1rem", padding: "1rem", border: "1px solid black" }}
        >
          <form>
            {/* Hotel Destination Input */}
            <div style={{ marginBottom: "1rem" }}>
              <label htmlFor="destination">Find a Hotel or Destination:</label>
              <input
                type="text"
                id="destination"
                name="destination"
                placeholder="Enter destination"
                style={{ marginLeft: "1rem" }}
                required
              />
            </div>

            {/* Check-in and Check-out Date */}
            <div style={{ marginBottom: "1rem" }}>
              <label htmlFor="checkin">Check-in Date:</label>
              <input
                type="date"
                id="checkin"
                name="checkin"
                style={{ marginLeft: "1rem" }}
                required
              />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <label htmlFor="checkout">Check-out Date:</label>
              <input
                type="date"
                id="checkout"
                name="checkout"
                style={{ marginLeft: "1rem" }}
                required
              />
            </div>

            {/* Guests and Room Selection */}
            <div style={{ marginBottom: "1rem" }}>
              <label htmlFor="guests">Guests:</label>
              <select id="guests" name="guests" style={{ marginLeft: "1rem" }}>
                <option value="3adults_2children_2rooms">
                  3 Adults, 2 Children - 2 Rooms
                </option>
                {/* Add more options if needed */}
              </select>
            </div>

            {/* Special Code */}
            <div style={{ marginBottom: "1rem" }}>
              <label htmlFor="special-code">Special Code:</label>
              <input
                type="text"
                id="special-code"
                name="special-code"
                placeholder="Enter code (if any)"
                style={{ marginLeft: "1rem" }}
              />
            </div>

            {/* Check Rates Button */}
            <button
              type="submit"
              style={{
                backgroundColor: "#d4af37",
                color: "#fff",
                padding: "0.5rem 1rem",
                border: "none",
                cursor: "pointer",
              }}
            >
              Check Rates
            </button>
          </form>
        </div>
      )}

      {/* The rest of the component logic remains unchanged */}
      {showMap && (
        <div
          style={{ margin: "1rem", padding: "1rem", border: "1px solid black" }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0259082920943!2d144.95373631586446!3d-37.81720974202169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ced60!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1632737602821!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Header;

