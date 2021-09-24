import React from 'react';

import './ArticleCard.css';

const ArticleCard = ({abstract, byline, date, multimedia, title, index, url}) => {

    return (
        <section
            key={index}
            className='article-card'>
            <h3> {title} </h3>
            <p> {byline} </p>
            <p> date : {date} </p>
            <p> {abstract} </p>
            <a href={url}>  
                <button> NYT Page</button>
            </a>
        </section>
    )
}

export default ArticleCard;