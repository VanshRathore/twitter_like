import { useState } from 'react';
import '../CSS/Tweet.css';

function Tweet({ tweetid, content, likeCount, createdAt, onEdit }) {
    const [isEditting, setIsEditting] = useState(false);
    const [editContent, setEditContent] = useState(content);

    const handleSaveEdit = () => {
        onEdit({
            id: tweetid,
            content: editContent,
            likeCount: likeCount,
            createdAt: createdAt
        });
        setIsEditting(false);
    };

    return (
        <div className='tweet-wrapper'>
            <div className='tweet-edit-wrapper'>
                <div className="tweet-content">
                    {isEditting ? (
                        <input
                            type='text'
                            value={editContent}
                            onChange={(e) => setEditContent(e.target.value)}
                        />
                    ) : (
                        content
                    )}
                </div>
                <div className='edit-tweet'>
                    <button onClick={() => {
                        if (isEditting) handleSaveEdit();
                        else setIsEditting(true);
                    }}>
                        {isEditting ? 'Save' : 'Edit'}
                    </button>
                </div>
            </div>

            <div className='like-createdAt-wrapper'>
                <div className="likes">
                    {likeCount} likes
                </div>
                <div className='created-at'>
                    <b>Tweeted at </b> {createdAt}
                </div>
            </div>
        </div>
    );
}

export default Tweet;
