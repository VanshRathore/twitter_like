import '../CSS/Tweet.css'
function Tweet({ content, likeCount , createdAt}) {
    return (
        <div className='tweet-wrapper'>
            <div className="tweet-content">
                {content}
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
    )
}

export default Tweet;
