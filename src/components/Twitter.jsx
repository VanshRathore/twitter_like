import AddTweet from './AddTweet';
import { useState } from "react";
import TweetList from './TweetList';

const initialDummyTweets = [
    { id: 0, content: 'we have a new twitter like app called as thread ', likeCount: 20 , createdAt: new Date()},
    { id: 1, content: 'Hello guys I m new here', likeCount: 30, createdAt: new Date()},
    { id: 2, content: 'What should i post', likeCount: 30, createdAt: new Date()},
]

function Twitter() {
    const [tweets, setTweet] = useState(initialDummyTweets);
    const handelAddTweet = (text) => {
        let nextid = (tweets.length > 0) ? tweets[tweets.length - 1].id + 1 : 0;
        setTweet([...tweets, {
            content: text,
            likeCount: Math.floor(Math.random() * 10),
            id: nextid,
            createdAt: new Date()
        }])
    }
    return (
        < >
            <AddTweet onAddTweet={handelAddTweet} />
            <TweetList tweets={tweets} />
        </>
    )
}

export default Twitter;