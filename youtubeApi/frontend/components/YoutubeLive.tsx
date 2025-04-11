import React, { useEffect, useState } from 'react';
import axios from 'axios';
import YoutubeVideoCard from './YoutubeVideoCard';

type Props = {
    channelId: string;
};

function YoutubeLive({ channelId }: Props) {
    const [videos, setVideos] = useState<any[]>([]);

    useEffect(() => {
        if (!channelId) return;

        axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/api/youtube/live`, {
            params: { channelId },
        }).then((res) => {
            setVideos(res.data.items || []);
        }).catch((err) => console.error('API Error:', err));
    }, [channelId]);

    return (
        <div>
            <h2>현재 실시간 유튜브 라이브</h2>
            {videos.length === 0 ? (
                <p>현재 라이브 방송이 없습니다.</p>
            ) : (
                <div className="row">
                    {videos.map((video) => (
                        <YoutubeVideoCard
                            key={video.id?.videoId}
                            videoId={video.id?.videoId}
                            title={video.snippet?.title}
                            thumbnailUrl={video.snippet?.thumbnails?.default?.url}
                            channelTitle={video.snippet?.channelTitle}
                            publishedAt={video.snippet?.publishedAt}
                            liveType="live"
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default YoutubeLive;
