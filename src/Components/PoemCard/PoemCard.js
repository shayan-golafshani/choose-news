import React from 'react';

const PoemCard = ({title, author, lines, linecount, index}) => {
//pull out the data going to be passed down through state



    return (
        <section
        key={index}
        className='poem-card'>
            <h3>{title}</h3>
            <p>By {author}</p>
            <p>{lines}</p>
            <p>{linecount}</p>
        </section>
    )
}

export default PoemCard;