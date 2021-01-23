import React from "react";
//import components
import Tweet from "./Tweet";

const Tweets = (props) => {
    const tweets = [
        { name: 'tom', tweet: 'very cool' },
        { name: 'brian', tweet: 'helouuuuuuuuuuuuuuuu' },
        { name: 'george', tweet: 'i am george hello everybodyyyyy' }
    ];
    return (
        <section>
            {tweets.map(tweet => (
                <Tweet name={tweet.name} tweet={tweet.tweet} />
            ))}
        </section>
    );
}

export default Tweets;