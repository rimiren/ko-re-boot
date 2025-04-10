import React, { useState } from 'react';
import axios from 'axios';
import YoutubeVideoCard from './YoutubeVideoCard';

function YoutubeSearch() {
    const [query, setQuery] = useState('');
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        if (!query) return;
        setLoading(true);
        try {
            const res = await axios.get('/api/youtube/channel', {
                params: {
                    channelId: '',
                    query: query,
                },
            });

            console.log("🎬 응답:", res.data);

            if (res.data.items) {
                setVideos(res.data.items);
            }
        } catch (err) {
            console.error('검색 에러:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="flex gap-4 items-center mb-6">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="검색어를 입력하세요"
                    className="w-60 border px-4 py-2 rounded-md shadow-sm focus:outline-none"
                />
                <button
                    onClick={handleSearch}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition"
                >
                    검색
                </button>
            </div>

            {loading && <p className="text-gray-500 mb-4">검색 중...</p>}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {videos
                    .filter(video => video.id?.kind === "youtube#video" && video.id?.videoId)
                    .map((video) => (
                        <YoutubeVideoCard
                            key={video.id.videoId}
                            videoId={video.id.videoId}
                            title={video.snippet?.title}
                        />
                    ))}
            </div>

            {!loading && videos.length === 0 && (
                <p className="text-sm text-gray-400">검색 결과가 없습니다.</p>
            )}
        </div>
    );
}

export default YoutubeSearch;
