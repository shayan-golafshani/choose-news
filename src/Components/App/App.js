import React, {useEffect, useState} from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Poems from '../Poems/Poems';
import './App.css';

import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import { randomPoem } from '../../apiCalls';
import { getRandomFromArray } from '../../util';
import ImageGallery from 'react-image-gallery';

function App() {
  const [mainArticle, setMainArticle] = useState([]);
  const [images, setImages] = useState([]);
  const [isLoadingArticle, setIsLoadingArticle] = useState(false);
  const [errMessage, setErrMessage] = useState('');

  const getPoem = () => {
    setIsLoadingArticle(true)   
      randomPoem()
      .then(jsondata => {
        setIsLoadingArticle(false)
        if(jsondata) {
          let results = getRandomFromArray(jsondata.results)
          let images = results.multimedia.map(img => {
            return {
              original: img.url,
              // thumbnail: img.url,
            }
          })
        setImages(images)  
        setMainArticle(results)
        }
        else {
          throw new Error('Something went wrong, Please try again.')
        }
      })
        .catch(err => {
          setErrMessage('Darn, the server is down! Please try again later.')
        });
}

  useEffect(() => {
    getPoem()
  },[])

  

let feelingLuckyPage = (
  <>
    <section className='main-poem'>
      
        <p>{mainArticle.section}</p>
        <p>{mainArticle.subsection}</p>
        <p className='article-title'>Title: <a href={mainArticle.url}>{mainArticle.title}  </a></p>
        <ImageGallery items={images}/>
        <p>Title: {mainArticle.title}</p>
        <p>{mainArticle.abstract}</p>
      
    </section >
  </>
)

  function reload() {
    window.location.reload(false)
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavLink to='/'>
          <p className='title-text'>
            Choose your news! 📰
          </p>
        </NavLink>
      <section className='Nav-links'>
        <NavLink to='/'>
          {/* FIX THE NAVIGATION TO the normal spot  */}
          <button onClick={reload}>
            Feeling lucky!
          </button>
        </NavLink>

        <NavLink to='/categories'>
          <button>
            Search news categories
          </button>
        </NavLink>

      </section>
      </header>
      <main>
      <Switch>
        <Route exact path='/'>
          <section className='feeling-lucky-page'>
            {errMessage && <Error message={"We weren't able to grab a random poem for you, mate! Try again."} />}
            {isLoadingArticle && <Loading />}
            {(!isLoadingArticle && !errMessage) && feelingLuckyPage}
          </section>
        </Route>

        <Route exact path ='/categories'>
          <Poems />
        </Route>

        <Route >
          <Error />
        </Route>
      </Switch>
      </main>
    </div>
  );
}

export default App;
