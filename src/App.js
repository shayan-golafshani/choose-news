import React, {useEffect, useState} from 'react';
import ReactPlayer from "react-player"
import { tracks } from './tracks';
import './App.css';


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

    
  useEffect(() => {
    getPoem()

  },[])

  let poem = mainPoem.map((line, index) => {
    //console.log(index)
    return  <p key={index}>
              {line}
            </p>
  }) 

  return (
    <div className="App">
      <header className="App-header">
        Tha-Zen Box!

      </header>
      <main>
        <section className="spinning-photo">
          {
            <img src='https://thisartworkdoesnotexist.com/' className="App-logo" alt="logo" />
          }
        </section>
        <section className='audio-player'>
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
