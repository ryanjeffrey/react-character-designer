import React, { useState } from 'react';
import Controls from '../Controls/Controls.js';
import Player from '../Player/Player.js';
import Slogan from '../Slogan/Slogan.js';
import Stats from '../Stats/Stats.js';

import './Main.css';

export default function Main() {
  const [helmet, setHelmet] = useState('blue');

  return (
    <main>
      <Controls helmet={helmet} setHelmet={setHelmet} />
      <Player helmet={helmet} />
      <Stats />
      <Slogan />
    </main>
  );
}
