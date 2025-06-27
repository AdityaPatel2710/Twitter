import Tweet from "../Tweet/Tweet";

function TweetList({ tweetList, onEditTweet }) {

    return (
        <div>
            <ul className="tweetlist-container">
                {
                    tweetList.map((tweet) => (
                        <li key = {tweet.id}>
                            <Tweet tweetInfo={tweet} onEditTweet={onEditTweet} />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}


export default TweetList;
