import React, {useEffect, useState} from 'react';
import Error from '../Error/Error';
import PoemCard from '../PoemCard/PoemCard';
import Loading from '../Loading/Loading';
import './Poems.css';
import { checkForError } from '../../util';

function Poem() {
  const [allAuthors, setAllAuthors] = useState([]);
  const [selectedAuthor, setSelectedAuthor] = useState('');
  const [selectedAuthorPoems , setSelectedAuthorPoems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [authErrMessage, setAuthErrMessage] = useState('');
  const [poemListErrMessage, setPoemListErrMessage] = useState('');

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
      setIsLoading(true)
      fetch('https://poetrydb.org/author')
      .then(response => checkForError(response))
      .then(jsondata => {
        setIsLoading(false)
        console.log('JSON DATA INSIDE GET AUTHORS', jsondata)
        if(jsondata.status === 404) {
          throw new Error('Something went wrong, Please try again.')
        }
        if(jsondata) {
          setAllAuthors(jsondata.authors)
        } else {
          throw new Error('Something went wrong, Please try again.')
        }
      })
      .catch(err => {
        setAuthErrMessage('Darn, the server is down! Please try again later.')
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
        setIsLoading(true)   
        fetch(`https://poetrydb.org/author/${selectedAuthor}`)
        .then(response => checkForError(response))
        .then(jsondata => {
          setIsLoading(false)
          if(jsondata.status === 404) {
            throw new Error('Something went wrong, Please try again.')
          }
          console.log('JSON DATA INSIDE GET AUTHOR POEMS', jsondata)
            if(jsondata) {
              setSelectedAuthorPoems(jsondata)
            } else {
              throw new Error('Something went wrong, Please try again.')
            }
        })
        .catch(err => {
          setPoemListErrMessage('Darn, the server is down! Please try again later.')
          console.error(err)
        });
    }
      getAuthorPoems()
    }
  }, [selectedAuthor])

  let options
  if(!!allAuthors.length) {
    //console.log('THE LENGTH OF ALL AUTHORS', allAuthors.length)
    options = allAuthors.map((author, index) => <option key={index} value={author}>{author}</option>)
  }
  
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

  const renderSelect= () => {
    return <>
      <label htmlFor="author-select">Choose a poet:</label>
      <select 
        name="author"
        id="author-select"
        onChange={e => setSelectedAuthor(e.target.value)}>
        <option value=""> Please select another option </option>
        {options}
      </select>
    </>
  }

  return (

      <> 
        {renderSelect()}
      <section className='poetry-container'>
        {authErrMessage && <Error message={"We weren't able to load authors for you, mate! Try again."} />}
        {poemListErrMessage && <Error message={"We weren't able to load the poems for you, mate! Try again."} />}
        {isLoading && <Loading />}
        {/* {(!isLoading && !authErrMessage) && renderSelect()} */}
        {(!isLoading && !poemListErrMessage) && !!selectedAuthorPoems.length && makePoetryCards()}
      </section>
      </>
  );
}
export default Poem;
// !!selectedAuthorPoems.length