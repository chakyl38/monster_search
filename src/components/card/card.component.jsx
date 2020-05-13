import React from 'react'
import './card.style.css'

// Pulling in name from json pull on app.js
// Pulling in email from json pull on app.js
// asigning id from json pull to pull in unique image from site pull
export const Card = (props) => {
    return(
        <div className='card-container'>
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
        <h2> { props.monster.name } </h2>
        <p>{ props.monster.email }</p>
        </div>
    )
}