import React from 'react';
import './PoemCard.css';

const PoemCard = ({title, author, lines, linecount, index, addToFaves, buttonType}) => {
//pull out the data going to be passed down through state

//figure out how to make it display a different image everytime!
//<img src='http://thisartworkdoesnotexist.com' alt='random AI generated artwork from thisartworkdoesnotexist.com'/>

let buttonImg = buttonType ?
                   <img id={index} src="https://img.icons8.com/office/30/000000/like--v1.png" alt="favorite button"/>
                 : <img id={index} src="https://img.icons8.com/office/30/000000/delete-sign.png" alt="delete button"/>;


let spacedLines = lines.map((line, index) => {
    return <p key={index}>{line}</p>
})
    return (
        <section
        key={index}
        className='poem-card'>
               <button 
               onClick={e => addToFaves(e)}
               className="favorite-btn">
                    {buttonImg}
               </button>
            <h3>{title}</h3>
            <p>By {author}</p>
            <section className='formatted-lines'>{spacedLines}</section>
            <p>{linecount} lines</p>
        </section>
    )
}

export default PoemCard;