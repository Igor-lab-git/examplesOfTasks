'use client'
import React from 'react';

const LikeButton = () => {
    const [isLike, setIsLike] = React.useState(false);
    return (
        <div>
            <button onClick={() => setIsLike(prev => !prev)}>
                {isLike ? "❤️" : "🤍"}
            </button>
        </div>
    )
};

export default LikeButton;
