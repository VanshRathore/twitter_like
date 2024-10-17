import { useState } from 'react';
import '../CSS/Tweet.css';

function Tweet({ tweetid, content, likeCount, createdAt, onEdit, avatar }) {
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

    // Format the creation time for better readability
    const formattedCreatedAt = new Date(createdAt).toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });

    return (
        <div className='tweet-wrapper'>
            <div className='tweet-content-wrapper'>
                {/* User Avatar */}
                <img className='tweet-avatar' src={avatar} alt="User Avatar" />
                
                <div className='tweet-text-wrapper'>
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

                    <div className='like-createdAt-wrapper'>
                        <div className="likes">
                            {likeCount} likes
                        </div>
                        {/* Display the formatted time and date */}
                        <div className='created-at'>
                            {formattedCreatedAt}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tweet;
