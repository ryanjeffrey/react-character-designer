import React, { useState } from 'react';

import './Slogan.css';

export default function Slogan({ setSlogans }) {
  const [currentSlogan, setCurrentSlogan] = useState('');
  const handleSaveSlogan = (e) => {
    e.preventDefault();
    if (!currentSlogan) return;
    setSlogans((prevSlogans) => [...prevSlogans, currentSlogan]);
    setCurrentSlogan('');
  };
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder='Go Bears!'
          value={currentSlogan}
          onChange={(e) => setCurrentSlogan(e.target.value)}
        ></input>
        <button onClick={handleSaveSlogan}>Add Slogan</button>
      </form>
    </div>
  );
}
