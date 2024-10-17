import AddTweet from './AddTweet';
import { useState , useCallback, memo } from "react";
import TweetList from './TweetList';

const initialDummyTweets = [
    { id: 0, content: 'we have a new twitter like app called as thread ', likeCount: 20, createdAt: new Date().toLocaleString() },
    { id: 1, content: 'Hello guys I m new here', likeCount: 30, createdAt: new Date().toLocaleString() },
    { id: 2, content: 'What should i post', likeCount: 30, createdAt: new Date().toLocaleString() },
]

const MemoisedAddTweet = memo(AddTweet);

function Twitter() {
    const [tweets, setTweets] = useState(initialDummyTweets);

    // Add new tweet
    const handelAddTweet = useCallback((text) => {
        let nextId = (tweets.length > 0) ? tweets[tweets.length - 1].id + 1 : 0;
        setTweets([...tweets, {
            content: text,
            likeCount: Math.floor(Math.random() * 10),
            id: nextId,
            createdAt: new Date().toLocaleString()
        }])
    }, [ ]);

    // Edit existing tweet
    const handelEditTweet = useCallback((updatedTweet) => {
        setTweets(
            tweets.map((currentTweet) => 
                currentTweet.id === updatedTweet.id ? updatedTweet : currentTweet
            )
        );
    }, []);

    const sortTweets = useCallback(() => {
        tweets.sort((t1, t2) => t2.createdAt.getTime() - t1.createdAt.getTime());
        setTweets([...tweets]);
    } , []);

    return (
        <>
            <MemoisedAddTweet onAddTweet={handelAddTweet} />
            <button onClick = {sortTweets}>
                Sort Tweet By CreatedAt
            </button>
            <TweetList tweets={tweets} onEditTweet={handelEditTweet} />
        </>
    );
}

export default Twitter;
