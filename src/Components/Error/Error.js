import { Link } from 'react-router-dom'
import React from 'react'
import './Error.css'

const Error = ({message}) => {

    return (
        <div className='error'>         
                <h4 className='error-message'>Errors are red, blue-screens of death are blue, Sorry we were unable to find this resource for you!</h4>
                <h5>{message}</h5>
            <Link to ='/'>
                <img className='error-image' id='error-image' src='https://media.giphy.com/media/3osxY9kuM2NGUfvThe/giphy.gif' alt='roses are red violets are blue, here is an unexpected error for you!'/>
            </Link>
        </div>
    )
}
export default Error;