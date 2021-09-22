import React, {useState} from 'react';
//import PropTypes from 'prop-types';
import './ArticleCard.css';

// abstract={article.abstract}
// byline={article.byline}
// date={article.published_date}
// multimedia={article.multimedia}
// title={article.title}

const ArticleCard = ({abstract, byline, date, multimedia, title, index}) => {


const handleClick = (e) => {}

    return (
        <section
            key={index}
            className='article-card'>
            <h3> {title} </h3>
            <p> {byline} </p>
            <p> {date} </p>
            <p> {abstract} </p>
            {/* <p>{mainArticle.section}</p>
        <p>{mainArticle.subsection}</p>
        <p className='article-title'>Title: <a href={mainArticle.url}>{mainArticle.title}  </a></p>
        <ImageGallery items={images}/>
        <p>Title: {mainArticle.title}</p>
        <p>{mainArticle.abstract}</p> */}
        </section>
    )
}

export default ArticleCard;