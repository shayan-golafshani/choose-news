import React, {useEffect, useState} from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import ReactPlayer from "react-player"
import { tracks } from '../../data/tracks'
import Poems from '../Poems/Poems';
import './App.css';


function App() {
  const [mainPoem, setMainPoem] = useState([]);
  const [errMessage, setErrMessage] = useState('');

  const getPoem = () => {   
      fetch('https://poetrydb.org/random')
      .then(response => response.json())
      .then(jsondata => {
        
        console.log(jsondata, 'INSIDE THE GET POEM FETCH')
        setMainPoem(jsondata[0].lines)})
      .catch(err => console.error(err));
}

  useEffect(() => {
    getPoem()
  },[])

  let poem = mainPoem.map((line, index) => {
    return  <p key={index}>
              {line}
            </p>
  }) 

  return (
    
    <div className="App">
      <header className="App-header">
        <p>
          Tha-Zen Box!
        </p>
      <section className='Nav-links'>

      <NavLink to='/poems'>
        <button>
          Poems
        </button>
      </NavLink>


      <NavLink to='/'>
        <button>
          Randomize Me
        </button>
      </NavLink>

        <button>
          Songs
        </button>

        <button>
          Meditation
        </button>
      </section>

      </header>
      <main>
      <Switch>
        <Route exact path='/'>
          <section className="spinning-photo">
            {<img src='https://thisartworkdoesnotexist.com/' className="App-logo" alt="logo" />}
          </section>
          <section className='main-poem'>
            {poem}
          </section >
          <section className='audio-player'>
            <ReactPlayer
              url={tracks[0]}
            />
          </section>
        </Route>

        <Route exact path ='/poems'>
          <Poems />
        </Route>
      </Switch>
      </main>
    </div>
  );
}

export default App;
