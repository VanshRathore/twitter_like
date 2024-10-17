import React, { useState, useContext } from "react";
import { TweetContext } from "../context/tweetContext";
import '../CSS/AddTweet.css'; // Add a separate CSS file for AddTweet styling

function AddTweet() {
    const [text, setText] = useState("");
    const { tweets, setTweets } = useContext(TweetContext);

    return (
        <div className="add-tweet-wrapper">
            <textarea
                className="tweet-input"
                placeholder="What's happening?"
                value={text}
                onChange={ (e) => setText(e.target.value) }
                rows="3"
            />
            <div className="add-tweet-actions">
                <button className="tweet-btn" onClick={() => {
                    if (text.trim().length === 0) return; // Prevent empty tweets
                    let nextId = (tweets.length > 0) ? tweets[tweets.length - 1].id + 1 : 0;
                    setTweets([...tweets, {
                        content: text,
                        likeCount: Math.floor(Math.random() * 10), // random like count
                        id: nextId,
                        createdAt: new Date()
                    }]);
                    setText(''); // Clear input after submitting
                }}>
                    Tweet
                </button>
            </div>
        </div>
    );
}

export default AddTweet;
