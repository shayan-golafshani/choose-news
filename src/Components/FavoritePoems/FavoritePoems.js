import React, {useState} from 'react';
import PoemCard from '../PoemCard/PoemCard';
//use same css as before
import '../Poems/Poems.css';

function FavoritePoems() {
  const [favoritePoems, setFavoritePoems] = useState(JSON.parse(localStorage.getItem('favePoems')) || []);

  const removeFromFaves = (e) => {
    let localData = JSON.parse(localStorage.getItem('favePoems'))
    
    let remainingPoems = localData.filter((poem, index) => parseInt(e.target.id) !== index)
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
    {!poetryCards.length && (<h2>You haven't favorited any cards yet! Go ❤️ some!</h2>)}
    <section className='poetry-container'>
      {!!poetryCards.length && poetryCards}
    </section>
    </>
  );
}

export default FavoritePoems;
