import { useState } from "react";
import AddTweet from "../AddTweet/AddTweet";
import TweetList from "../TweetList/TweetList";

let dummyTweets = [
  {id: 0, content: "first tweet", likesCount: 10},
  {id: 1, content: "second tweet", likesCount: 20},
  {id: 2, content: "third tweet", likesCount: 15}
];


function Twitter() {
    const [tweets, setTweets] = useState(dummyTweets);
    
    function handleAddTweet(text) {
        let nextId = (tweets.length > 0) ? (tweets[tweets.length-1].id + 1) : 0;
        setTweets([...tweets, {
            id: nextId, 
            content: text, 
            likesCount: Math.floor(Math.random()*100)
        }]);
    }

    return (
        <div>
            <AddTweet onAddTweet={handleAddTweet} />
            <TweetList tweetList={tweets} />
        </div>
    )
}


export default Twitter;
