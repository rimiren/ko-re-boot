import React from 'react';

function YoutubeVideoCard({ videoId, title, thumbnail, label }) {
    if (!videoId || !thumbnail || !title) return null;

    return (
        <li key={videoId}>
            <img src={thumbnail} alt={title} />
            <p>{title}</p>
            <a
                href={`https://www.youtube.com/watch?v=${videoId}`}
                target="_blank"
                rel="noreferrer"
            >
                {label}
            </a>
        </li>
    );
}

export default YoutubeVideoCard;
