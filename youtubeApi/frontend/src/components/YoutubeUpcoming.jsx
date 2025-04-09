import React, { useEffect, useState } from 'react';
import axios from 'axios';
import YoutubeVideoCard from './YoutubeVideoCard';

function YoutubeUpcoming({ channelId, apiKey }) {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        if (!channelId || !apiKey) return;

        axios
            .get('/api/youtube/upcoming', {
                params: { channelId, apiKey },
            })
            .then((res) => {
                if (res.data.items) {
                    setVideos(res.data.items);
                }
            })
            .catch((err) => console.error('API Error:', err));
    }, [channelId, apiKey]);

    return (
        <div>
            <h2>예정된 유튜브 라이브</h2>
            {videos.length === 0 ? (
                <p>예정된 방송이 없습니다.</p>
            ) : (
                <ul>
                    {videos.map((video) => (
                        <YoutubeVideoCard
                            key={video.id?.videoId}
                            videoId={video.id?.videoId}
                            title={video.snippet?.title}
                            thumbnail={video.snippet?.thumbnails?.default?.url}
                            label="미리보기"
                        />
                    ))}
                </ul>
            )}
        </div>
    );
}

export default YoutubeUpcoming;
