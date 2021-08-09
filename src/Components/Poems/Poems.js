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
  
    // if there's nothing in local storage you need to rturn just an empty array

    let matchedPoem = selectedAuthorPoems.filter((poem, index) => {
      // console.log(`${poem.author}${index}` === e.target.id, "FOUND A MATCH")
      return `${poem.author}${index}` === e.target.id
      //index === e.target.id
    })

    // console.log('match', matchedPoem)
    
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
        setAllAuthors(jsondata.authors)})
      .catch(err => {
        setErrMessage('Darn, the server is down! Please try again later.')
        console.error(err)
      });
  }
  
  useEffect(() => {
    getAuthors()
  },[])
  
  useEffect(() => {
    setSelectedAuthorPoems([])
    if(selectedAuthor){
      //console.log('SELECTED AUTHOR inside useEFFECT', selectedAuthor)
      const getAuthorPoems = () => {   
        fetch(`https://poetrydb.org/author/${selectedAuthor}`)
        .then(response => response.json())
        .then(jsondata => {
          
          // console.log(jsondata, "ALL AUTHOR POEMS")
          setSelectedAuthorPoems(jsondata)})
        .catch(err => {
        setErrMessage('Darn, the server is down! Please try again later.')
        console.error(err)
        });
    }
      getAuthorPoems()
    }
  }, [selectedAuthor])

  let options = allAuthors.map((author, index) => <option key={index} value={author}>{author}</option>)
  
  const makePoetryCards = () => {
   return selectedAuthorPoems.map((poem, index) => {
      return <PoemCard
      addToFaves={addToFaves}
      author={poem.author}
      buttonType={true}
      index={`${poem.author}${index.toString()}`}
      key={index}
      linecount={poem.linecount}
      lines={poem.lines}
      title={poem.title}
      />
    })
  }


  return (
    <>
      <label htmlFor="author-select">Choose a poet:</label>
      <select 
        name="author"
        id="author-select"
        onChange={e => setSelectedAuthor(e.target.value)}>
        <option value=""> Please select another option </option>
        {options}
      </select>
      <section className='poetry-container'>
        {!!selectedAuthorPoems.length && makePoetryCards()}
      </section>
    </>
  );
}
export default Poem;