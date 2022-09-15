import React from 'react';

import './Player.css';

export default function Player({ helmet }) {
  return (
    <div className="player">
      <div className='helmet' style={{ backgroundImage: `url(./img/${helmet}-helmet.png)` }}></div>
      <img src={process.env.PUBLIC_URL + `/img/home-jersey.png`} className="jersey" />
      <img src={process.env.PUBLIC_URL + `/img/white-pants.png`} className="pants" />
    </div>
  );
}
