import { Link } from 'react-router-dom'
import React from 'react'
import './Error.css'

const Error = ({message}) => {

    return (
        <div className='error'>         
                <h3>{message}</h3>
            <Link to ='/'>
                <h4 className='error-message'>Errors are red, blue-screens of death are blue, Sorry we were unable to find this resource for you!</h4>
            </Link>
            <img className='error-image' id='error-image' src='https://media.giphy.com/media/j9XoexYMmd7LdntEK4/giphy.gif' alt='roses are red violets are blue, here is an unexpected error for you!'/>
        </div>
    )
}
export default Error;