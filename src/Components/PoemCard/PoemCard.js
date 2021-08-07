import React from 'react';

const PoemCard = ({title, author, lines, linecount, index}) => {
//pull out the data going to be passed down through state

//figure out how to make it display a different image everytime!
<img src='http://thisartworkdoesnotexist.com' alt='random AI generated artwork from thisartworkdoesnotexist.com'/>

    return (
        <section
        key={index}
        className='poem-card'>
            <h3>{title}</h3>
            <p>By {author}</p>
            <p>{lines}</p>
            <p>{linecount} lines</p>
        </section>
    )
}

export default PoemCard;