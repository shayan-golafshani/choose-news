import React, {useEffect, useState} from 'react';
import PoemCard from '../PoemCard/PoemCard';
//use same css as before
import '../Poems/Poems.css';

function FavoritePoems() {
  
  const [favoritePoems, setFavoritePoems] = useState(JSON.parse(localStorage.getItem('favePoems')) || []);
  const [errMessage, setErrMessage] = useState('');

  const removeFromFaves = (e) => {
    let localData = JSON.parse(localStorage.getItem('favePoems'))
    
    //console.log("This is the event", e)
    let remainingPoems = localData.filter((poem, index) => parseInt(e.target.id) !== index)

    console.log('THESE ARE THE REMAINING POEMS MATE', remainingPoems)
    setFavoritePoems(remainingPoems)
    localStorage.setItem('favePoems', JSON.stringify(remainingPoems));
  }


  let poetryCards = favoritePoems.map((poem, index) => {
    return <PoemCard
            author={poem.author}
            buttonType={false}
            index={index}
            key={index}
            linecount={poem.linecount}
            lines={poem.lines}
            removeFromFaves={removeFromFaves}
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
