import { useState } from 'react';
import YoutubeLive from './components/YoutubeLive';
import YoutubeUpcoming from './components/YoutubeUpcoming';
import './App.css';

const channels = [
    { name: '츠나', id: 'UCIjdfjcSaEgdjwbgjxC3ZWg' },
    { name: '미오', id: 'UCp-5t9SrOQwXMU7iIjQfARg' },
    { name: '후부키', id: 'UCdn5BQ06XqgXoAxIhbqw5Rg' },
];

function App() {
    const [view, setView] = useState('live');
    const [selectedChannel, setSelectedChannel] = useState(channels[0]);

    return (
        <div className="app-container">
            <h1 className="app-title">V!Spo</h1>

            <div style={{ marginBottom: '16px' }}>
                <label htmlFor="channelSelect">채널 선택: </label>
                <select
                    id="channelSelect"
                    value={selectedChannel.id}
                    onChange={(e) =>
                        setSelectedChannel(
                            channels.find((ch) => ch.id === e.target.value)
                        )
                    }
                >
                    {channels.map((channel) => (
                        <option key={channel.id} value={channel.id}>
                            {channel.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="button-group">
                <button
                    className={`view-button ${view === 'live' ? 'active' : ''}`}
                    onClick={() => setView('live')}
                >
                    실시간 방송 보기
                </button>
                <button
                    className={`view-button ${view === 'upcoming' ? 'active' : ''}`}
                    onClick={() => setView('upcoming')}
                >
                    방송 예정 보기
                </button>
            </div>

            {view === 'live' && <YoutubeLive channelId={selectedChannel.id} />}
            {view === 'upcoming' && <YoutubeUpcoming channelId={selectedChannel.id} />}
        </div>
    );
}

export default App;
