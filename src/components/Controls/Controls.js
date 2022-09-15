import React from 'react';

import './Controls.css';

export default function Controls() {
  return (
    <div className="controls">
      <label>Helmet</label>
      <select>
        <option>Blue</option>
        <option>Orange</option>
        <option>White</option>
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
      <form>
        <input name='slogan' type='text' placeholder='Bear Down!'></input>
        <button>Add Slogan</button>
      </form>
    </div>
  );
}
