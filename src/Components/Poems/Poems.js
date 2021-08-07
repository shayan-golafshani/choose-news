import React, {useEffect, useState} from 'react';
import './Poems.css';

import PoemCard from '../PoemCard/PoemCard';

function Poem() {
  
  const [allAuthors, setAllAuthors] = useState([]);
  const [selectedAuthor, setSelectedAuthor] = useState('');
  const [selectedAuthorPoems , setSelectedAuthorPoems] = useState([]);
  const [allPoems, setAllPoems] = useState([]);
  const [errMessage, setErrMessage] = useState('');

  const getAuthors = () => {   
      fetch('https://poetrydb.org/author')
      .then(response => response.json())
      .then(jsondata => {
        
        console.log(jsondata, 'inside GET ALL AUTHORS fetch')
        setAllAuthors(jsondata.authors)})
      .catch(err => console.error(err));
  }

  
  //getAuthorPoems(setSelectedAuthor)
  
  useEffect(() => {
    getAuthors()
  },[])
  
  useEffect(() => {
    if(selectedAuthor){
      console.log('SELECTED AUTHOR inside useEFFECT', selectedAuthor)
      const getAuthorPoems = () => {   
        fetch(`https://poetrydb.org/author/${selectedAuthor}`)
        .then(response => response.json())
        .then(jsondata => {
          
          console.log(jsondata, "ALL AUTHOR POEMS")
          setSelectedAuthorPoems(jsondata)})
        .catch(err => console.error(err));
    }
      getAuthorPoems()
    }
  }, [selectedAuthor])

  
  let options = allAuthors.map((author, index) => <option key={index} value={author}>{author}</option>)

  return (
    <section>
      <select 
        name="author"
        id="author"
        onChange={e => setSelectedAuthor(e.target.value)}>
        {options}
      </select>
    </section>
  );
}

export default Poem;
