import React from "react";
//import components
import Tweet from "./Tweet";

const Tweets = (props) => {
    const tweets = [{ name: 'tom', tweet: 'very cool' },
    { name: 'brian', tweet: 'helouuuuuuuuuuuuuuuu' },
    { name: 'george', tweet: 'i am george hello everybodyyyyy' }]
    return (
        <section>
            <Tweet me={props.me} age={props.age} />
        </section>
    );
}:

export default Tweets;