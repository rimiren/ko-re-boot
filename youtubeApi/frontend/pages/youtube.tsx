import React from 'react';
import YoutubeSearch from '@/components/YoutubeSearch';
import YoutubeCategory from '@/components/YoutubeCategory';
import YoutubeLive from '@/components/YoutubeLive';
import YoutubeUpcoming from '@/components/YoutubeUpcoming';

export default function YoutubePage() {
    const channelId = 'UC-hM6YJuNYVAmUWxeIr9FeA'; // 예시: 사쿠라 미코

    return (
        <div className="container mt-4">
            <h2>Youtube 대시보드</h2>
            <YoutubeSearch />
            <YoutubeCategory />
            <YoutubeLive channelId={channelId} />
            <YoutubeUpcoming channelId={channelId} />
        </div>
    );
}
