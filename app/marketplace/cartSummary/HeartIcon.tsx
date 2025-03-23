"use client"; // Mark as a Client Component

import React, { useState } from 'react';
import './cart.css';

const HeartIcon: React.FC = () => {
    const [liked, setLiked] = useState(false);

    return (
        <i 
            className={`fa-heart heart-icon ${liked ? 'fas liked' : 'far'}`} 
            onClick={() => setLiked(!liked)}
        ></i>
    );
};

export default HeartIcon;


