import Tweet from "../Tweet/Tweet";

function TweetList({ tweetList }) {

    return (
        <div>
            <ul className="tweetlist-container">
                {
                    tweetList.map((tweet) => (
                        <li key = {tweet.id}>
                            <Tweet content={tweet.content} likesCount={tweet.likesCount} />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}


export default TweetList;
