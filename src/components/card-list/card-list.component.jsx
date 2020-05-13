import React from 'react'
import { Card } from '../card/card.component'
import './card-list.style.css'

// pulling in json call from app.js
// using .map() to list out all 'objects' in array from json call
// assigning props to card component (key, and monster)
export const CardList = (props) => {
    return(
        <div className='card-list'>
            {
                props.monsters.map(monster => <Card key={ monster.id } monster={ monster } />)
            }
        </div>
    )
}