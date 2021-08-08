import React, {useEffect, useState} from 'react';
import PoemCard from '../PoemCard/PoemCard';
import './Poems.css';

function Poem() {
  
  const [allAuthors, setAllAuthors] = useState([]);
  const [selectedAuthor, setSelectedAuthor] = useState('');
  const [selectedAuthorPoems , setSelectedAuthorPoems] = useState([]);
  // not using this state yet.
  const [errMessage, setErrMessage] = useState('');


  const addToFaves = (e) => {
    let localData = localStorage.getItem('favePoems')
    
    let matchedPoem = selectedAuthorPoems.filter((poem, index) => index === parseInt(e.target.id))
    
    if(localData) {
      localData = JSON.parse(localData)
      let found = localData.find(poem => poem.title === matchedPoem[0].title)

      if(!found) {
        localData.push(matchedPoem[0])  
        localStorage.setItem('favePoems', JSON.stringify(localData));
        return true;
      }
      //so if this method returns false then, it was already favorited!
      return false;
    } else {
      localStorage.setItem('favePoems', JSON.stringify(matchedPoem));
      return true;
    }
  }

  const getAuthors = () => {   
      fetch('https://poetrydb.org/author')
      .then(response => response.json())
      .then(jsondata => {
        
        //console.log(jsondata, 'inside GET ALL AUTHORS fetch')
        setAllAuthors(jsondata.authors)})
      .catch(err => console.error(err));
  }
  
  useEffect(() => {
    getAuthors()
  },[])
  
  useEffect(() => {
    if(selectedAuthor){
      //console.log('SELECTED AUTHOR inside useEFFECT', selectedAuthor)
      const getAuthorPoems = () => {   
        fetch(`https://poetrydb.org/author/${selectedAuthor}`)
        .then(response => response.json())
        .then(jsondata => {
          
          //console.log(jsondata, "ALL AUTHOR POEMS")
          setSelectedAuthorPoems(jsondata)})
        .catch(err => console.error(err));
    }
      getAuthorPoems()
    }
  }, [selectedAuthor])

  let options = allAuthors.map((author, index) => <option key={index} value={author}>{author}</option>)

  let poetryCards = selectedAuthorPoems.map((poem, index) => {
    return <PoemCard
            addToFaves={addToFaves}
            author={poem.author}
            buttonType={true}
            index={index}
            key={index}
            linecount={poem.linecount}
            lines={poem.lines}
            title={poem.title}
           />
  })

  return (
    <>
      <select 
        name="author"
        id="author"
        onChange={e => setSelectedAuthor(e.target.value)}>
        {options}
      </select>
      <section className='poetry-container'>
        {!!poetryCards.length && poetryCards}
      </section>
    </>
  );
}
export default Poem;