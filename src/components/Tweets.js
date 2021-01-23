import React from "react";
//import components
import Tweet from "./Tweets";

const Tweets = (props) => (
    <div>
        <h2>{props.me}</h2>
        <h3>{props.age}</h3>
        <Tweet />
    </div>
);

export default Tweets;