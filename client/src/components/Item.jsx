import React from 'react'
import '../App.css'
const Item = ({text, remove}) => {
    return (
        <div className="note">
            <div id='text'>
                {text}
            </div>
            <span id='extra'>
                <button onClick={remove}>delete</button>
            </span>
        </div>
    )
}

export default Item