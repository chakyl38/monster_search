import React from 'react'
import './search-box.style.css'

// Since its not a class function it does not have access to state and life cycle methods
// functional component just uses props and renders html
// set placeholder as the prop to be used as dynamic for multiple pages in input placeholder format
// set handleChange as the prop to be used for the dynamic search to be used in multiple pages
export const SearchBox = ({ placeholder, handleChange }) => {
    return(
        <input 
            className='search'
            type='search' 
            placeholder={ placeholder } 
            onChange={ handleChange }
        />
    )
}

