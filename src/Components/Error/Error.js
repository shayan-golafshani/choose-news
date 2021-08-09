import { Link } from 'react-router-dom'
import React from 'react'
import './Error.css'
// import '../Resources/tomato1.png'

const Error = ({message}) => {

    return (
        <div className='error'>         
            <Link to ='/'>
                <h3 className='error-message'>Something went wrong. Click here to be redirected.</h3>
            </Link>
            <img className='error-image' id='error-image' src='https://media.giphy.com/media/KXBtTtm3kB8BO/giphy.gif' alt='roses are red violets are blue, here is an unexpected error for you!'/>
        </div>
    )

}

export default Error;