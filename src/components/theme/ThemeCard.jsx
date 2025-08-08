
import React from 'react';
import './ThemeCard.css';

function ThemeCard({ title, image }) {
  return (
    <div className="theme-card">
      <img src={image} alt={title} className="theme-image" />
      <p className="theme-title">{title}</p>
    </div>
  );
}

export default ThemeCard;
