import { useState } from 'react';
import YoutubeLive from './components/YoutubeLive';
import YoutubeUpcoming from './components/YoutubeUpcoming';

function App() {
    const [view, setView] = useState('live'); // live or upcoming
    const channelId = 'UCIjdfjcSaEgdjwbgjxC3ZWg'; // 츠나 채널

    return (
        <div className="App">
            <h1>V!Spo</h1>
            <div style={{ marginBottom: '16px' }}>
                <button onClick={() => setView('live')}>실시간 방송 보기</button>
                <button onClick={() => setView('upcoming')} style={{ marginLeft: '8px' }}>
                    방송 예정 보기
                </button>
            </div>

            {view === 'live' && <YoutubeLive channelId={channelId} />}
            {view === 'upcoming' && <YoutubeUpcoming channelId={channelId} />}
        </div>
    );
}

export default App;
