import React, { useState } from 'react';
import axios from 'axios';
import YoutubeVideoCard from './YoutubeVideoCard';

const channels = [
    { name: '츠나', id: 'UCIjdfjcSaEgdjwbgjxC3ZWg' },
    { name: '미오', id: 'UCp-5t9SrOQwXMU7iIjQfARg' },
    { name: '후부키', id: 'UCdn5BQ06XqgXoAxIhbqw5Rg' },
    { name: '토와', id: 'UC1uv2Oq6kNxgATlCiez59hw' },
    { name: '미코', id: 'UC-hM6YJuNYVAmUWxeIr9FeA' },
    { name: '고양이', id: '' },
];

function YoutubeCategory() {
    const [selectedChannelId, setSelectedChannelId] = useState(channels[0].id);
    const [videos, setVideos] = useState<any[]>([]);
    const [viewMode, setViewMode] = useState<'live' | 'upcoming' | null>(null);
    const [showOptions, setShowOptions] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        setLoading(true);
        setViewMode(null);
        setShowOptions(false);
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/api/youtube/channel`, {
                params: { channelId: selectedChannelId },
            });
            if (res.data.items) {
                setVideos(res.data.items);
                setShowOptions(true);
            }
        } catch (e) {
            console.error('채널 영상 로딩 실패:', e);
        } finally {
            setLoading(false);
        }
    };

    const liveVideos = videos.filter(v => v.snippet?.liveBroadcastContent === 'live');
    const upcomingVideos = videos.filter(v => v.snippet?.liveBroadcastContent === 'upcoming');

    const renderVideoList = (list: any[], label: string) => (
        list.length === 0
            ? <p className="text-muted mb-3">{label}이(가) 없습니다.</p>
            : <div className="row">
                {list.map(video => (
                    <YoutubeVideoCard
                        key={video.id.videoId}
                        videoId={video.id.videoId}
                        title={video.snippet.title}
                        thumbnailUrl={video.snippet.thumbnails.medium.url}
                        channelTitle={video.snippet.channelTitle}
                        publishedAt={video.snippet.publishedAt}
                        liveType={video.snippet.liveBroadcastContent || 'none'}
                    />
                ))}
            </div>
    );

    return (
        <div>
            <div className="d-flex align-items-center gap-2 mb-4">
                <select
                    className="form-select w-auto"
                    value={selectedChannelId}
                    onChange={(e) => setSelectedChannelId(e.target.value)}
                >
                    {channels.map((ch) => (
                        <option key={ch.name} value={ch.id}>{ch.name}</option>
                    ))}
                </select>
                <button className="btn btn-primary" onClick={handleSearch}>영상 보기</button>
            </div>

            {loading && <p className="text-muted">불러오는 중...</p>}

            {showOptions && (
                <div className="d-flex gap-2 mb-4">
                    <button
                        className={`btn ${viewMode === 'live' ? 'btn-primary' : 'btn-outline-secondary'}`}
                        onClick={() => setViewMode('live')}
                    >
                        실시간 스트리밍
                    </button>
                    <button
                        className={`btn ${viewMode === 'upcoming' ? 'btn-primary' : 'btn-outline-secondary'}`}
                        onClick={() => setViewMode('upcoming')}
                    >
                        스트리밍 예정
                    </button>
                </div>
            )}

            {viewMode === 'live' && renderVideoList(liveVideos, '실시간 스트리밍')}
            {viewMode === 'upcoming' && renderVideoList(upcomingVideos, '스트리밍 예정')}
        </div>
    );
}

export default YoutubeCategory;
