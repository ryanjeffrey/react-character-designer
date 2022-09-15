import React from 'react';

import './Slogan.css';

export default function Slogan() {
  return (
    <div>
      <form>
        <input name="slogan" type="text" placeholder="Bear Down!"></input>
        <button>Add Slogan</button>
      </form>
    </div>
  );
}
