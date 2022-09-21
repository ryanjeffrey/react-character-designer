import React from 'react';

import './Player.css';

export default function Player({ helmet, jersey, pants }) {
  return (
    <div className="player">
      <div className='helmet' style={{ backgroundImage: `url(./img/${helmet}-helmet.png)` }}></div>
      <div className='jersey' style={{ backgroundImage: `url(./img/${jersey}-jersey.png)` }}></div>
      <div className='pants' style={{ backgroundImage: `url(./img/${pants}-pants.png)` }}></div>
    </div>
  );
}
