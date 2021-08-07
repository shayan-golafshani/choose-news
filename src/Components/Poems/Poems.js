import React, {useEffect, useState} from 'react';
import { Route, Switch, NavLink, Link } from 'react-router-dom';

import './Poems.css';


function Poem() {
  
  const [allAuthors, setAllAuthors] = useState([]);
  const [selectedAuthor, setSelectedAuthor] = useState('');
  const [allPoems, setAllPoems] = useState([]);
  const [errMessage, setErrMessage] = useState('');

  const getAuthors = () => {   
      fetch('https://poetrydb.org/author')
      .then(response => response.json())
      .then(jsondata => {
        
        console.log(jsondata)
        setAllAuthors(jsondata.authors)})
      .catch(err => console.error(err));
}

  useEffect(() => {
    getAuthors()
  },[])

  // let poem = mainPoem.map((line, index) => {
  //   return  <p key={index}>
  //             {line}
  //           </p>
  // }) 

  
  let options = allAuthors.map( (author, index) => {
    return <option key={index} value={`${author}`}>{author}</option>
  })
  
  let select = (  
    <select name="author" id="author">
      {options}
    </select>
  )

    /*
        <PoemCard >

    </PoemCard>
     */

  return (
    <section>
      {select}
    </section>

  );
}

export default Poem;
