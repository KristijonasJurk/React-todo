import React from 'react';

const Tweet = (props) => (
    <div>
        <h1>{props.me}</h1>
        <h3>{props.age}</h3>
    </div>
);

export default Tweet;