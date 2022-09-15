import React, { useState } from 'react';
import Controls from '../Controls/Controls.js';
import Player from '../Player/Player.js';
import Slogan from '../Slogan/Slogan.js';
import Stats from '../Stats/Stats.js';

import './Main.css';

export default function Main() {
  const [helmet, setHelmet] = useState('blue');
  const [jersey, setJersey] = useState('home');
  const [pants, setPants] = useState('white');

  return (
    <main>
      <Controls
        helmet={helmet}
        setHelmet={setHelmet}
        jersey={jersey}
        setJersey={setJersey}
        pants={pants}
        setPants={setPants}
      />
      <Player helmet={helmet} jersey={jersey} pants={pants} />
      <Stats />
      <Slogan />
    </main>
  );
}
