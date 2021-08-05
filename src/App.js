//import logo from './logo.svg';
import { response } from 'express';
import {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [affirmation, setAffirmation] = useState('');
  const [errMessage, setErrMessage] = useState('');


  

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
