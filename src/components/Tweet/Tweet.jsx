function Tweet({ content, likesCount }) {

    return (
        <div>
            <div className="tweet-content"> {content} </div>
            <div className="tweet-likes-count"> {likesCount} likes </div>
        </div>
    )
}


export default Tweet;
