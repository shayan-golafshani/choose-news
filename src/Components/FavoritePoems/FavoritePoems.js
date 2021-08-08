import React, {useEffect, useState} from 'react';
import PoemCard from '../PoemCard/PoemCard';
//use same css as before
import '../Poems/Poems.css';

function FavoritePoems() {
  
  const [favoritePoems, setFavoritePoems] = useState(JSON.parse(localStorage.getItem('favePoems')) || []);
  const [errMessage, setErrMessage] = useState('');


  let poetryCards = favoritePoems.map((poem, index) => {
    return <PoemCard
            author={poem.author}
            buttonType={false}
            index={index}
            key={index}
            linecount={poem.linecount}
            lines={poem.lines}
            title={poem.title}
           />
  })

  return (
    <>
    <section className='poetry-container'>
      {!!poetryCards.length && poetryCards}
    </section>
    </>
  );
}

export default FavoritePoems;
