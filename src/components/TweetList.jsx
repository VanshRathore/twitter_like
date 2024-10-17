import '../CSS/TweetList.css'
import Tweet from "./Tweet";
import { memo } from 'react';

const MemoisedTweet = memo(Tweet);

function TweetList({ tweets, onEditTweet }) {
    return (
        <ul className='tweet-list'>
            {
                tweets.map((tweet) => (
                    <li className='tweet-like-wrapper' key={tweet.id}>
                        <MemoisedTweet
                            tweetid={tweet.id}
                            content={tweet.content}
                            likeCount={tweet.likeCount}
                            createdAt={tweet.createdAt.toString()}
                            onEdit={onEditTweet} // Make sure this is stable using useCallback in the parent
                        />
                    </li>
                ))
            }
        </ul>
    )
}

export default TweetList;
