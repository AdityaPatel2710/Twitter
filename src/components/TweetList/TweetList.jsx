import { memo } from "react";
import Tweet from "../Tweet/Tweet";

const MemoisedTweet = memo(Tweet);  // ensures that untill props don't change it doesn't re-render

function TweetList({ tweetList, onEditTweet }) {

    return (
        <div>
            <ul className="tweetlist-container">
                {
                    tweetList.map((tweet) => (
                        <li key = {tweet.id}>
                            <MemoisedTweet tweetInfo={tweet} onEditTweet={onEditTweet} />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}


export default TweetList;
