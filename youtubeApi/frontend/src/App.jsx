import {Header} from './components/Header';
import {Sidebar} from './components/Sidebar';
import {MainContent} from './components/MainContent';

function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <div className="flex flex-1">
                <Sidebar />
                <MainContent />
            </div>
        </div>
    );
}

export default App;