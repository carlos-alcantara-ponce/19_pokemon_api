import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [pokemons, setPokemons] = useState({});
  const [sendRequest, setSendRequest] = useState(false);


  useEffect(
    () => {

      if (sendRequest) {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=807')
          .then(response => response.json())
          .then(response => { setPokemons(response.results) })
          .catch()
        setSendRequest(false);

      }
    }
    , [sendRequest]
  );

  const onClick = (e) => {

    setSendRequest(true);

  };


  return (
    <div className="App">
      <button onClick={onClick}>Fetch Pokemon</button>
      <ul>
        {pokemons.length > 0 && pokemons.map((currPoke, i) => <li key={i}>{currPoke.name}  </li>)}
      </ul>

    </div>
  );
}

export default App;
