import { useState } from "react";
import getFormattedTimestamp from "../../helpers/getFormattedTimestamp";

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
            <div>
                <div className="tweet-likes-count"> {tweetInfo.likesCount} likes </div>
                <div> <span>{(tweetInfo.isEdited) ? "Edited" : "Tweeted"} at </span> {getFormattedTimestamp(tweetInfo.createdAt)} </div>
            </div>
        </div>
    )
}


export default Tweet;
