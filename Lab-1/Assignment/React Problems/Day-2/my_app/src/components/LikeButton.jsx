import React, { useState } from 'react';

const LikeButton = ({ initialLikes }) => {
    const [likes, setLikes] = useState(initialLikes);
  
    return (
      <button
        onClick={() => setLikes(likes + 1)}
        className="px-4 py-2 bg-green-500 text-white rounded shadow hover:scale-110 transform transition-all duration-200 active:animate-pulse"
      >
        Like ({likes})
      </button>
    );
  };
  

export default LikeButton;
