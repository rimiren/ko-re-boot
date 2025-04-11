import React, { useState } from 'react';
import YoutubeCategory from './YoutubeCategory';
import YoutubeSearch from './YoutubeSearch';

export function MainContent() {
    const [tab, setTab] = useState<'category' | 'search'>('category');

    return (
        <main className="flex-grow-1 p-4">
            <div className="mb-4 d-flex gap-2">
                <button
                    onClick={() => setTab('category')}
                    className={`btn ${tab === 'category' ? 'btn-primary' : 'btn-outline-secondary'}`}
                >
                    즐겨보는 탭
                </button>
                <button
                    onClick={() => setTab('search')}
                    className={`btn ${tab === 'search' ? 'btn-primary' : 'btn-outline-secondary'}`}
                >
                    검색창
                </button>
            </div>

            {tab === 'category' && <YoutubeCategory />}
            {tab === 'search' && <YoutubeSearch />}
        </main>
    );
}
