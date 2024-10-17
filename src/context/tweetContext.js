import { createContext } from 'react';
const initialDymmyTweets = [
    { id: 0, content: 'we have a new twitter called as threads', likeCount: 3, createdAt: new Date()},
    { id: 1, content: 'Hello im new here', likeCount: 4, createdAt: new Date()},
    { id: 2, content: 'What should we post ??', likeCount: 2, createdAt: new Date()}
  ];
export const TweetContext = createContext(initialDymmyTweets);