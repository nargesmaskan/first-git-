import React from "react";
import './Popup.css';

const Popup = ({ onClose, onRemember, rememberMe }) => {
  const handleRememberChange = () => {
    const newRememberMe = !rememberMe;  
    onRemember(newRememberMe); 
    localStorage.setItem("remember", newRememberMe.toString()); 
  };

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <h2 className="popup-title">Welcome to the Throne of Glass</h2>
        <p className="popup-message">
          You can explore Erelia by clicking the map on the navbar.
        </p>
        <p>Hope you have a good time and make sure you give your opinions about our site on our social media.</p>
        <div className="popup-actions">
          <label className="popup-checkbox-label">
            <input
              className="popup-checkbox"
              type="checkbox"
              checked={rememberMe}
              onChange={handleRememberChange}
              aria-label="Don't show this again"
            />
            Don't show this again
          </label>
          <div className="popup-buttons">
            <button className="popup-button" onClick={onClose}>
              Let's explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
