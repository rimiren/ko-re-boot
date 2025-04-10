import React, { useState } from 'react';
import axios from 'axios';
import YoutubeVideoCard from './YoutubeVideoCard';

// 채널 목록: 이름 + 채널 ID (고양이는 빈 문자열)
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
    const [videos, setVideos] = useState([]);
    const [viewMode, setViewMode] = useState(null); // 'live' | 'upcoming'
    const [showOptions, setShowOptions] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        setLoading(true);
        setViewMode(null);
        setShowOptions(false);
        try {
            const res = await axios.get('/api/youtube/channel', {
                params: { channelId: selectedChannelId }
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

    const renderVideoList = (videoList, label) => {
        if (videoList.length === 0) {
            return <p className="text-gray-500 mb-4">{label}이(가) 없습니다.</p>;
        }
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {videoList.map((video) => (
                    <YoutubeVideoCard
                        key={video.id?.videoId}
                        videoId={video.id?.videoId}
                        title={video.snippet?.title}
                    />
                ))}
            </div>
        );
    };

    return (
        <div>
            {/* 드롭다운 + 버튼 */}
            <div className="flex gap-4 items-center mb-6">
                <select
                    value={selectedChannelId}
                    onChange={(e) => setSelectedChannelId(e.target.value)}
                    className="border px-4 py-2 rounded-md shadow-sm"
                >
                    {channels.map((ch) => (
                        <option key={ch.name} value={ch.id}>{ch.name}</option>
                    ))}
                </select>
                <button
                    onClick={handleSearch}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition"
                >
                    영상 보기
                </button>
            </div>

            {/* 로딩 표시 */}
            {loading && <p className="text-gray-500">불러오는 중...</p>}

            {/* 필터 버튼 */}
            {showOptions && (
                <div className="mb-6 flex gap-4">
                    <button
                        onClick={() => setViewMode('live')}
                        className={`px-4 py-2 rounded shadow ${viewMode === 'live' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
                    >
                        실시간 스트리밍
                    </button>
                    <button
                        onClick={() => setViewMode('upcoming')}
                        className={`px-4 py-2 rounded shadow ${viewMode === 'upcoming' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
                    >
                        스트리밍 예정
                    </button>
                </div>
            )}

            {/* 조건부 영상 리스트 출력 */}
            {viewMode === 'live' && renderVideoList(liveVideos, '실시간 스트리밍')}
            {viewMode === 'upcoming' && renderVideoList(upcomingVideos, '스트리밍 예정')}
        </div>
    );
}

export default YoutubeCategory;
