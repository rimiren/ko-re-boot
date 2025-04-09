import React, { useEffect, useState } from 'react';
import axios from 'axios';
import YoutubeVideoCard from './YoutubeVideoCard';

function YoutubeLive({ channelId }) {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        if (!channelId) return;

        axios
            .get('/api/youtube/live', {
                params: { channelId },
            })
            .then((res) => {
                if (res.data.items) {
                    setVideos(res.data.items);
                }
            })
            .catch((err) => console.error('API Error:', err));
    }, [channelId]);

    return (
        <div>
            <h2>현재 실시간 유튜브 라이브</h2>
            {videos.length === 0 ? (
                <p>현재 라이브 방송이 없습니다.</p>
            ) : (
                <ul>
                    {videos.map((video) => (
                        <YoutubeVideoCard
                            key={video.id?.videoId}
                            videoId={video.id?.videoId}
                            title={video.snippet?.title}
                            thumbnail={video.snippet?.thumbnails?.default?.url}
                            label="시청하기"
                        />
                    ))}
                </ul>
            )}
        </div>
    );
}

export default YoutubeLive;
