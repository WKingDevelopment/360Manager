import React from 'react';
import { Link } from 'react-router-dom';

const NoticeBoardPage = () => {
    console.log('NoticeBoardHit')
    return (
        <div>
            Life Cycle Page
            <Link to="/Configuration">Configuration</Link>
        </div>
    )
}

export { NoticeBoardPage }