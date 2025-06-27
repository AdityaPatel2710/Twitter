import getFormattedTimestamp from "../../helpers/getFormattedTimestamp";

import "./TweetDetails.css";


function TweetDetails({ likesCount, createdAt, isEdited }) {

    return (
        <div className="tweet-details-wrapper">
            <div className="tweet-likes-count"> {likesCount} likes </div>
            <div> <span className={(isEdited)?"tweet-edited":""}>{(isEdited) ? "Edited" : "Tweeted"} at </span> {getFormattedTimestamp(createdAt)} </div>
        </div>
    )
}


export default TweetDetails;
