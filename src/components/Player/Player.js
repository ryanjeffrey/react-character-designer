import React from 'react';

import './Player.css';

export default function Player({ helmet, jersey }) {
  return (
    <div className="player">
      <div className='helmet' style={{ backgroundImage: `url(./img/${helmet}-helmet.png)` }}></div>
      <div className='jersey' style={{ backgroundImage: `url(./img/${jersey}-jersey.png)` }}></div>
      <img src={process.env.PUBLIC_URL + `/img/white-pants.png`} className="pants" />
    </div>
  );
}
