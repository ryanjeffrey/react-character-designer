import React from 'react';

import './Controls.css';

export default function Controls({ helmet, setHelmet, jersey, setJersey }) {
  return (
    <div className="controls">
      <label>Helmet</label>
      <select value={helmet} onChange={(e) => setHelmet(e.target.value)}>
        <option value="blue">Blue</option>
        <option value="orange">Orange</option>
        <option value="white">White</option>
      </select>
      <label>Jersey</label>
      <select value={jersey} onChange={(e) => setJersey(e.target.value)}>
        <option value="home">Home</option>
        <option value="away">Away</option>
        <option value="classic">Classic</option>
      </select>
      <label>Pants</label>
      <select>
        <option>White</option>
        <option>Blue</option>
        <option>Orange</option>
      </select>
    </div>
  );
}
