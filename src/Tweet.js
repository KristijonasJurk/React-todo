import React from 'react';
import "./App.css";

function Tweet({ title, message }) {
    return (

        <div className='box'>
            <h1>{title}</h1>
            <p>{message}</p>
            <h3>some other text</h3>
        </div>
    )
}

export default Tweet;