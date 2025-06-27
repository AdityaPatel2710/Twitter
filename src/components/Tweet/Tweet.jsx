import { memo, useState } from "react";
import TweetDetails from "./TweetDetails";

const MemoisedTweetDetails = memo(TweetDetails);
/**
 * "if we don't change createdAt & isEdited" => these details will remain unchanged even when Tweet component re-renders
 * therefore, memoizing these will be more obvious
 */

function Tweet({ tweetInfo, onEditTweet }) {
    const [isEditing, setIsEditing] = useState(false);
    const [tweetContent, setTweetContent] = useState(tweetInfo.content);

    return (
        <div>
            <div>
                <div className="tweet-content"> {(isEditing) ? <input value={tweetContent} onChange={(Event) => setTweetContent(Event.target.value)} /> : tweetContent} </div>
                <div>
                    <button 
                        disabled = {(tweetContent == "")}
                        onClick={() => {
                            if(isEditing) onEditTweet(tweetInfo.id, tweetContent);
                            setIsEditing(!isEditing);
                        }}
                    > {(isEditing) ? "Post" : "Edit"} </button>
                </div>
            </div>
            
            <MemoisedTweetDetails likesCount={tweetInfo.likesCount} createdAt={tweetInfo.createdAt} isEdited={tweetInfo.isEdited} />
        </div>
    )
}


export default Tweet;
