import React, {useEffect, useState} from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Poems from '../Poems/Poems';
import './App.css';

import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import { randomPoem } from '../../apiCalls';
import { getRandomFromArray } from '../../util';

function App() {
  const [mainArticle, setMainArticle] = useState([]);
  const [isLoadingArticle, setIsLoadingArticle] = useState(false);
  const [errMessage, setErrMessage] = useState('');

  const getPoem = () => {
    setIsLoadingArticle(true)   
      randomPoem()
      .then(jsondata => {
        setIsLoadingArticle(false)
        if(jsondata) {
          console.log('THIS IS WHAT UR GETTING BACK FROM THE API',getRandomFromArray(jsondata.results))
        setMainArticle(getRandomFromArray(jsondata.results))
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
      <p>Title: {mainArticle.title}</p>
      <p>{mainArticle.abstract}</p>
      
      <p></p>
    </section >
  </>
)

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
          <button>
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
