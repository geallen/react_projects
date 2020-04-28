import React from 'react'

export default function celebrity(props) {
    return (
        <div>
            <ul>
                <li>Name : {props.name}</li>
                <li>Movie : {props.movie}</li>
                <li>Age : {props.age} </li>
            </ul>
        </div>
    )
}
