import React from 'react';

import './Player.css';

export default function Player() {
  return (
    <div className="player">
      <img src={process.env.PUBLIC_URL + `/img/blue-helmet.png`} className="helmet" />
      <img src={process.env.PUBLIC_URL + `/img/home-jersey.png`} className="jersey" />
      <img src={process.env.PUBLIC_URL + `/img/white-pants.png`} className="pants" />
    </div>
  );
}
