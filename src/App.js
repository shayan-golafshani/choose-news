//import logo from './logo.svg';
//import { response } from 'express';
import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [mainPoem, setMainPoem] = useState([]);
  const [errMessage, setErrMessage] = useState('');

  const getPoem = () => {   
      fetch('https://poetrydb.org/title/Ozymandias/lines')
      .then(response => response.json())
      .then(jsondata => setMainPoem(jsondata[0].lines))
      .catch(err => console.error(err));
}
    
  useEffect(() => {
    getPoem()    
  },[])

  return (
    <div className="App">
      <header className="App-header">
        Tha-Zen Box!
      </header>
      <main>
        <section className="spinning-photo">
          <img src='https://thisartworkdoesnotexist.com/' className="App-logo" alt="logo" />
        </section>
        <section>
          <p>{
          //affirmation
          }</p>
        </section>

      </main>
    </div>
  );
}

export default App;
