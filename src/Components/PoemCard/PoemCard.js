import React, {useState} from 'react';
import PropTypes, { string } from 'prop-types';
import './PoemCard.css';

const PoemCard = ({title, author, lines, linecount, index, addToFaves, buttonType, removeFromFaves}) => {

const [isDisabled, setIsDisabled] = useState(false);
const [canFavorite, setCanFavorite] = useState(true);

//figure out how to make it display a different image everytime!
//<img src='http://thisartworkdoesnotexist.com' alt='random AI generated artwork from thisartworkdoesnotexist.com'/>


let buttonImg = buttonType ?
                   <img id={index} src="https://img.icons8.com/office/30/000000/like--v1.png" alt="favorite button"/>
                 : <img id={index} src="https://img.icons8.com/office/30/000000/delete-sign.png" alt="delete button"/>;


const handleClick = (e) => {
        setIsDisabled(true);
        setCanFavorite(addToFaves(e))
    }

let spacedLines = lines.map((line, index) => {
    return <p key={index}>{line}</p>
})

    return (
        <section
            key={index}
            className='poem-card'>
               <button
                    id={index} 
                    className={isDisabled ? "disabled-favorite"  : "favorite-btn"}
                    disabled={isDisabled}
                    onClick={e => {
                        if(buttonType) {
                            handleClick(e)
                        } else {
                            removeFromFaves(e)
                        }
                        }}
               >
                    {buttonImg}
               </button>
            {!canFavorite && <h4>You've already liked this one!</h4>}
            <h3>{title}</h3>
            <p>By {author}</p>
            <section className='formatted-lines'>{spacedLines}</section>
            <p>{linecount} lines</p>
        </section>
    )
}

export default PoemCard;

PoemCard.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    lines: PropTypes.array.isRequired,
    linecount: PropTypes.string.isRequired,
    index: PropTypes.any.isRequired, 
    addToFaves: PropTypes.func, 
    buttonType: PropTypes.bool.isRequired, 
    removeFromFaves: PropTypes.func
};