import { useState } from 'react';
import YoutubeLive from './components/YoutubeLive';
import YoutubeUpcoming from './components/YoutubeUpcoming';
import './App.css';

const channels = [
    {
        name: '츠나',
        id: 'UCIjdfjcSaEgdjwbgjxC3ZWg',
        apiKey: 'AIzaSyA-KEY1',
    },
    {
        name: '미오',
        id: 'UCp-5t9SrOQwXMU7iIjQfARg',
        apiKey: 'AIzaSyB-KEY2',
    },
    {
        name: 'SBS 뉴스',
        id: 'UCOmHUn--16B90oW2L6FRR3A',
        apiKey: 'AIzaSyC-KEY3',
    },
];

function App() {
    const [view, setView] = useState('live');
    const [selectedChannel, setSelectedChannel] = useState(channels[0]);

    return (
        <div className="app-container">
            <h1 className="app-title">V!Spo</h1>

            {/* 채널 선택 */}
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

            {/* 보기 버튼 */}
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

            {/* 콘텐츠 렌더링 */}
            {view === 'live' && (
                <YoutubeLive
                    channelId={selectedChannel.id}
                    apiKey={selectedChannel.apiKey}
                />
            )}
            {view === 'upcoming' && (
                <YoutubeUpcoming
                    channelId={selectedChannel.id}
                    apiKey={selectedChannel.apiKey}
                />
            )}
        </div>
    );
}

export default App;
