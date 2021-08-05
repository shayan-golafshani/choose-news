//import logo from './logo.svg';
import { response } from 'express';
import {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [affirmation, setAffirmation] = useState('');
  const [errMessage, setErrMessage] = useState('');


  const getAffirmation = () => {
    fetch("https://www.affirmations.dev")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
  }
  

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
