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
                params: { channelId: '', query },
            });

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
            <div className="d-flex align-items-center gap-2 mb-4">
                <input
                    type="text"
                    className="form-control w-25"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="검색어를 입력하세요"
                />
                <button className="btn btn-primary" onClick={handleSearch}>
                    검색
                </button>
            </div>

            {loading && <p className="text-muted mb-3">검색 중...</p>}

            <div className="row">
                {videos
                    .filter(v => v.id?.kind === "youtube#video" && v.id?.videoId)
                    .map(video => (
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

            {!loading && videos.length === 0 && (
                <p className="text-muted">검색 결과가 없습니다.</p>
            )}
        </div>
    );
}

export default YoutubeSearch;
