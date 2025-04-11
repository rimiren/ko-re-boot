import { useState } from 'react';

export default function YoutubeVideoCard({
                                             videoId,
                                             title,
                                             thumbnailUrl,
                                             channelTitle,
                                             publishedAt,
                                             liveType, // 'live' | 'upcoming' | 'none'
                                         }) {
    const [favorite, setFavorite] = useState(false);

    const handleFavoriteToggle = () => {
        setFavorite(!favorite);
        // 즐겨찾기 저장/삭제 로직은 추후 구현
    };

    return (
        <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm position-relative">
                <img
                    src={thumbnailUrl}
                    className="card-img-top img-fluid"
                    alt="썸네일"
                />

                {/* LIVE / 예정 뱃지 */}
                {liveType === 'live' && (
                    <span className="badge bg-danger position-absolute top-0 start-0 m-2">LIVE</span>
                )}
                {liveType === 'upcoming' && (
                    <span className="badge bg-secondary position-absolute top-0 start-0 m-2">예정</span>
                )}

                <div className="card-body">
                    <h5 className="card-title text-truncate">{title}</h5>
                    <p className="card-text text-muted mb-1">{channelTitle}</p>
                    <small className="text-muted">{new Date(publishedAt).toLocaleString()}</small>
                </div>

                <div className="card-footer d-flex justify-content-between align-items-center">
                    <a
                        href={`https://www.youtube.com/watch?v=${videoId}`}
                        className="btn btn-sm btn-outline-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        유튜브에서 보기
                    </a>
                    <button
                        className={`btn btn-sm ${favorite ? 'btn-warning' : 'btn-outline-warning'}`}
                        onClick={handleFavoriteToggle}
                    >
                        {favorite ? '★ 즐겨찾기됨' : '☆ 즐겨찾기'}
                    </button>
                </div>
            </div>
        </div>
    );
}
