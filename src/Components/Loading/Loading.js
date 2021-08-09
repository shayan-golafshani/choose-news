import React from 'react'
import './Loading.css'

const Loading = () => {

    return (
        <div className='loading'>
            <h2 className='loading-message'>Loading ...</h2>
            <img className='loading-image' id='loading-1' src='https://media.giphy.com/media/lviKnSMZfNdDWDthXs/giphy.gif' alt='loading spinner'/>      
        </div>
    )
}

export default Loading;