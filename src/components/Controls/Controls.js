import React from 'react';

import './Controls.css';

export default function Controls({ helmet, jersey, pants, handleChange }) {
  return (
    <div className="controls">
      <label>Helmet</label>
      <select value={helmet} onChange={(e) => handleChange('helmet', e.target.value)}>
        <option value="blue">Blue</option>
        <option value="orange">Orange</option>
        <option value="white">White</option>
      </select>
      <label>Jersey</label>
      <select value={jersey} onChange={(e) => handleChange('jersey', e.target.value)}>
        <option value="home">Home</option>
        <option value="away">Away</option>
        <option value="classic">Classic</option>
      </select>
      <label>Pants</label>
      <select value={pants} onChange={(e) => handleChange('pants', e.target.value)}>
        <option value="white">White</option>
        <option value="blue">Blue</option>
        <option value="orange">Orange</option>
      </select>
    </div>
  );
}
