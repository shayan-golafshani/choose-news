import React, {useEffect, useState} from 'react';
import Error from '../Error/Error';
import PoemCard from '../PoemCard/PoemCard';
import Loading from '../Loading/Loading';
import './Poems.css';
import { getArticlesByCat } from '../../apiCalls';

function Poem() {
  const [selectedCat, setSelectedCat] = useState('');
  const [selectedArticles , setSelectedArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [poemListErrMessage, setPoemListErrMessage] = useState('');
  
  useEffect(() => {
    setSelectedArticles([])
      const getArticlesByCategory = () => {
        setIsLoading(true)   
        getArticlesByCat(selectedCat)
        .then(jsondata => {
          setIsLoading(false)
          if(jsondata.status === 404) {
            throw new Error('Something went wrong, Please try again.')
          }
            if(jsondata) {
              setSelectedArticles(jsondata)
            } else {
              throw new Error('Something went wrong, Please try again.')
            }
        })
        .catch(err => {
          setPoemListErrMessage('Darn, the server is down! Please try again later.')
        });
    }
      getArticlesByCategory()
    
  }, [selectedCat])

  
  
  const makePoetryCards = () => {
   return selectedArticles.map((poem, index) => {
      return <PoemCard
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

  let optionsValues = [
    'arts',
    'automobiles',
    'books',
    'business', 
    'fashion', 
    'food', 
    'health', 
    'home', 
    'insider',
    'magazine',
    'movies',
    'nyregion', 
    'obituaries', 
    'opinion',
    'politics',
    'realestate',
    'science',
    'sports',
    'sundayreview', 
    'technology',
    'theater',
    't-magazine',
    'travel', 
    'upshot',
    'us',
    'world']

    let options = optionsValues.map(opt => <option value={`${opt}`}> {opt} </option> )

  const renderSelect= () => {
    return <>
      <label htmlFor="author-select">Choose a catergory:</label>
      <select 
        name="author"
        id="author-select"
        onChange={e => setSelectedCat(e.target.value)}>
          <option value=""> Please select another option </option>
          {options}
      </select>
    </>
  }

  return (
      <> 
        {renderSelect()}
      <section className='poetry-container'>
        {poemListErrMessage && <Error message={"We weren't able to load the articles for you, mate! Try again."} />}
        {isLoading && <Loading />}
        {(!isLoading && !poemListErrMessage) && !!selectedArticles.length && makePoetryCards()}
      </section>
      </>
  );
}
export default Poem;