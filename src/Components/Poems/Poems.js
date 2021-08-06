import React, {useEffect, useState} from 'react';
import { Route, Switch, NavLink, Link } from 'react-router-dom';

import './Poems.css';


function Poem() {
  
  const [allPoems, setAllPoems] = useState([]);
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
    return  <p key={index}>
              {line}
            </p>
  }) 

  return (
    
    {/*
        <PoemCard >

    </PoemCard>
     */}
  );
}

export default App;
