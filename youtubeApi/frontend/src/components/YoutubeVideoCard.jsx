import React from 'react';

function YoutubeVideoCard({ videoId, title }) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-video">
                <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={title}
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
            <div className="p-4">
                <h4 className="font-semibold text-md line-clamp-2">{title}</h4>
            </div>
        </div>
    );
}

export default YoutubeVideoCard;