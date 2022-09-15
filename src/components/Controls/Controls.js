import React from 'react';

import './Controls.css';

export default function Controls({ helmet, setHelmet }) {
  return (
    <div className="controls">
      <label>Helmet</label>
      <select value={helmet} onChange={(e) => setHelmet(e.target.value)}>
        <option value='blue'>Blue</option>
        <option value='orange'>Orange</option>
        <option value='white'>White</option>
      </select>
      <label>Jersey</label>
      <select>
        <option>Home</option>
        <option>Away</option>
        <option>Classic</option>
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
