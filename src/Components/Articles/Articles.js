import React, {useEffect, useState} from 'react';
import Error from '../Error/Error';
import ArticleCard from '../ArticleCard/ArticleCard';
import Loading from '../Loading/Loading';
import './Articles.css';
import { getArticlesByCat } from '../../apiCalls';

function Articles() {
  const [selectedCat, setSelectedCat] = useState('');
  const [selectedArticles , setSelectedArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [poemListErrMessage, setPoemListErrMessage] = useState('');
  
  useEffect(() => {
    setSelectedArticles([])
      const getArticlesByCategory = () => {
        if(selectedCat) {

       
        setIsLoading(true)   
        getArticlesByCat(selectedCat)
        .then(jsondata => {
          setIsLoading(false)
          if(jsondata.status === 404) {
            throw new Error('Something went wrong, Please try again.')
          }
            if(jsondata) {
              setSelectedArticles(jsondata.results)
              console.log('THIS IS THE JSON DATA IN YOUR RESULTS', jsondata.results)
            } else {
              throw new Error('Something went wrong, Please try again.')
            }
        })
        .catch(err => {
          //fix this portion
           //setPoemListErrMessage('Darn, the server is down! Please try again later.')
        });
      }
    }
      getArticlesByCategory()
  }, [selectedCat])

  
  
  const makeArticleCards = () => {
   return selectedArticles.map((article, index) => {
     console.log({article})
      return <ArticleCard
        key={index}
        index={index}
        abstract={article.abstract}
        byline={article.byline}
        date={article.published_date}
        multimedia={article.multimedia}
        title={article.title}
        url={article.short_url}
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
          <option value=""> Please Select an option </option>
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
        {(!isLoading && !poemListErrMessage) && !!selectedArticles.length && makeArticleCards()}
      </section>
      </>
  );
}
export default Articles;