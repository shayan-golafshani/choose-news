import React, {useEffect, useState} from 'react';
import ReactPlayer from "react-player"

import SC from 'soundcloud';
import { client_id } from './auth';
import { tracks } from './tracks';
import './App.css';

SC.initialize({client_id: client_id});

function App() {
  const [mainPoem, setMainPoem] = useState([]);
  const [errMessage, setErrMessage] = useState('');

  const getPoem = () => {   
      fetch('https://poetrydb.org/random')
      .then(response => response.json())
      .then(jsondata => {
        
        console.log(jsondata)
        setMainPoem(jsondata[0].lines)})
      .catch(err => console.error(err));
}

  const getSCTrack = () => {
    SC.get('/tracks', {
          q: 'buskers', genres: 'Rock'
        }).then(function(tracks) {
          console.log(tracks);
        });
  }

    
  useEffect(() => {
    getPoem()
    //getSCTrack()    
  },[])

  let poem = mainPoem.map(line => {
    return <p>{line}</p>
  }) 

  return (
    <div className="App">
      <header className="App-header">
        Tha-Zen Box!
      </header>
      <main>
        <section className="spinning-photo">
          {
            //<img src='https://thisartworkdoesnotexist.com/' className="App-logo" alt="logo" />
          }
        </section>
        <section>
          <ReactPlayer
            url={tracks[0]}
          />
          </section>
          
          <section className='main-poem'>
            {poem}
          </section >

      </main>
    </div>
  );
}

export default App;
