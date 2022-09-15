import React from 'react';

import './Player.css';

export default function Player() {
  return (
    <div className='player'>
      <img src={process.env.PUBLIC_URL + `/img/blue-helmet.png`} />
      <img src={process.env.PUBLIC_URL + `/img/home-jersey.png`} />
      <img src={process.env.PUBLIC_URL + `/img/white-pants.png`} />
    </div>
  );
}
