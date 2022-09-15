import React from 'react';
import Controls from '../Controls/Controls.js';
import Player from '../Player/Player.js';
import Slogan from '../Slogan/Slogan.js';
import Stats from '../Stats/Stats.js';

import './Main.css';

export default function Main() {
  return (
    <main>
      <Controls />
      <Player />
      <Stats />
      <Slogan />
    </main>
  );
}
