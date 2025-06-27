import { memo } from "react";
import Tweet from "../Tweet/Tweet";

import "./TweetList.css";

const MemoisedTweet = memo(Tweet);  // ensures that untill props don't change it doesn't re-render

function TweetList({ tweetList, onEditTweet }) {

    return (
        <ul className="tweetlist-wrapper">
            {
                tweetList.map((tweet) => (
                    <li key = {tweet.id}>
                        <MemoisedTweet tweetInfo={tweet} onEditTweet={onEditTweet} />
                    </li>
                ))
            }
        </ul>
    )
}


export default TweetList;
