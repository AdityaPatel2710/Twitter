import getFormattedTimestamp from "../../helpers/getFormattedTimestamp";


function TweetDetails({ likesCount, createdAt, isEdited }) {

    return (
        <div>
            <div className="tweet-likes-count"> {likesCount} likes </div>
            <div> <span>{(isEdited) ? "Edited" : "Tweeted"} at </span> {getFormattedTimestamp(createdAt)} </div>
        </div>
    )
}


export default TweetDetails;
