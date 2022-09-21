import React from 'react';

import './Stats.css';

export default function Stats({ helmetCount, jerseyCount, pantsCount, slogans }) {
  return (
    <div className="stats">
      <p>You have changed the helmet {helmetCount} times.</p>
      <p>You have changed the jersey {jerseyCount} times.</p>
      <p>You have changed the pants {pantsCount} times.</p>
      <h3>Slogans</h3>
      <ul>
        {slogans.map((slogan) => (
          <li key={slogan}>{slogan}</li>
        ))}
      </ul>
    </div>
  );
}
