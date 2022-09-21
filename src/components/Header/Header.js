import React from 'react';

import './Header.css';

export default function Header() {
  return (
    <header>
      <div className="logos">
        <img src={process.env.PUBLIC_URL + '/img/bears.png'} className="bears-logo" />
        <img src={process.env.PUBLIC_URL + '/img/swoosh-logo-black.jpeg'} className="nike-logo" />
      </div>
      <h1>Chicago Bears Uniform Designer</h1>
    </header>
  );
}
