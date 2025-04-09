import React, { useEffect, useState } from 'react';
import axios from 'axios';

function YoutubeLive({ channelId }) {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        if (!channelId) return;

        axios
            .get(`/api/youtube/live?channelId=${channelId}`)
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
                        <li key={video.id.videoId}>
                            <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
                            <p>{video.snippet.title}</p>
                            <a
                                href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                                target="_blank"
                                rel="noreferrer"
                            >
                                시청하기
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default YoutubeLive;
