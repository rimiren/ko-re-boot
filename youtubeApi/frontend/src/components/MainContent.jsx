import { useState } from 'react';
import YoutubeCategory from './YoutubeCategory';
import YoutubeSearch from './YoutubeSearch';

export function MainContent() {
    const [tab, setTab] = useState('category'); // or 'search'

    return (
        <main className="flex-1 p-6">
            <div className="mb-6 flex gap-4">
                <button
                    onClick={() => setTab('category')}
                    className={`px-4 py-2 rounded shadow ${tab === 'category' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
                >
                    즐겨보는 탭
                </button>
                <button
                    onClick={() => setTab('search')}
                    className={`px-4 py-2 rounded shadow ${tab === 'search' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
                >
                    검색창
                </button>
            </div>

            {tab === 'category' && <YoutubeCategory />}
            {tab === 'search' && <YoutubeSearch />}
        </main>
    );
}
