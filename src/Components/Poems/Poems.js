import React, {useEffect, useState} from 'react';
import PoemCard from '../PoemCard/PoemCard';
import './Poems.css';


function Poem() {
  
  const [allAuthors, setAllAuthors] = useState([]);
  const [selectedAuthor, setSelectedAuthor] = useState('');
  const [selectedAuthorPoems , setSelectedAuthorPoems] = useState([]);
  // not using this state yet.
  //const [allPoems, setAllPoems] = useState([]);
  const [errMessage, setErrMessage] = useState('');


  const addToFaves = (e) => {
    let localData = localStorage.getItem('favePoems')
    
    if(localData) {
      localData = JSON.parse(localData)
      console.log("THIS IS LOCAL DATA inside add2Faves", localData)
    }
    
    let matchedPoem = selectedAuthorPoems.filter((poem, index) => index === parseInt(e.target.id))
    
    //matchedPoem = matchedPoem[0]

    console.log("This is the matched poem", matchedPoem);
    //let stringifiedPoem = JSON.stringify(matchedPoem[0])

    if(localData) {
      //localData = JSON.parse(localData)
      console.log("LOCAL DATA inside Assignment IF", localData)

      localData.push(matchedPoem[0])
      //stringify it
      console.log('LOCAL DATA AFTER Pushing matched poem', localData)
      localData = JSON.stringify(localData)
      localStorage.setItem('favePoems', localData);
    } else {
      let stringifiedPoem = JSON.stringify(matchedPoem)
      localStorage.setItem('favePoems', stringifiedPoem);
    }
  }

  const getAuthors = () => {   
      fetch('https://poetrydb.org/author')
      .then(response => response.json())
      .then(jsondata => {
        
        console.log(jsondata, 'inside GET ALL AUTHORS fetch')
        setAllAuthors(jsondata.authors)})
      .catch(err => console.error(err));
  }
  
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
  let poetryCards = selectedAuthorPoems.map((poem, index) => {

    return <PoemCard
            addToFaves={addToFaves}
            index={index}
            title={poem.title}
            author={poem.author}
            lines={poem.lines}
            linecount={poem.linecount}
            key={index}
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
