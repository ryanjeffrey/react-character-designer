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
  const [helmetCount, setHelmetCount] = useState(0);
  const [jerseyCount, setJerseyCount] = useState(0);
  const [pantsCount, setPantsCount] = useState(0);
  const [slogans, setSlogans] = useState(['Bear Down!']);

  const handleChange = (type, value) => {
    if (type === 'helmet'){
      setHelmet(value);
      setHelmetCount((prevState) => prevState + 1);
    }
    if (type === 'jersey'){
      setJersey(value);
      setJerseyCount((prevState) => prevState + 1);
    }
    if (type === 'pants'){
      setPants(value);
      setPantsCount((prevState) => prevState + 1);
    }
  };

  return (
    <main>
      <Controls helmet={helmet} jersey={jersey} pants={pants} handleChange={handleChange} />
      <Player helmet={helmet} jersey={jersey} pants={pants} />
      <Stats
        helmetCount={helmetCount}
        jerseyCount={jerseyCount}
        pantsCount={pantsCount}
        slogans={slogans}
      />
      <Slogan setSlogans={setSlogans} />
    </main>
  );
}
