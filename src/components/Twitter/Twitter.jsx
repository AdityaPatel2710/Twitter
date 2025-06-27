import { memo, useCallback, useState } from "react";
import AddTweet from "../AddTweet/AddTweet";
import TweetList from "../TweetList/TweetList";

import "./Twitter.css";

let dummyTweets = [
  {id: 0, content: "first tweet", likesCount: 10, createdAt: new Date(), isEdited: false},
  {id: 1, content: "second tweet", likesCount: 20, createdAt: new Date(), isEdited: false},
  {id: 2, content: "third tweet", likesCount: 15, createdAt: new Date(), isEdited: false}
];

const MemoisedAddTweet= memo(AddTweet);  // ensures that untill props don't change it doesn't re-render

function Twitter() {
    const [tweets, setTweets] = useState(dummyTweets);
    
    const handleAddTweet = useCallback( (text) => {
        setTweets([{
                        id: Date.now(), 
                        content: text, 
                        likesCount: Math.floor(Math.random()*100),
                        createdAt: new Date(),
                        isEdited: false
                    }, 
                    ...tweets]);  // new tweet will be shown on the top

    }, [tweets]);  // [] is the DependencyList -> store variables for which 'only' callback should be re-rendered when any of those variables changes otherwise don't

    const handleEditTweet = useCallback( (id, newTweetContent) => {
        let newTweets = tweets.map((tweet) => ((tweet.id != id) ? tweet : { id: tweet.id, 
                                                                            content: newTweetContent, 
                                                                            likesCount: tweet.likesCount,
                                                                            createdAt: new Date(),
                                                                            isEdited: true
                                                                        })
                                );
        newTweets.sort((t1, t2) => (t2.createdAt.getTime() - t1.createdAt.getTime()));  // sorted by time -> latest first
        setTweets(newTweets);
    }, [tweets]);
    

    return (
        <div className="twitter-wrapper">
            <MemoisedAddTweet onAddTweet={handleAddTweet} />
            <TweetList tweetList={tweets} onEditTweet={handleEditTweet} />
        </div>
    )
}


export default Twitter;
