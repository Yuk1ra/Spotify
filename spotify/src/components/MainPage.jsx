import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Main from '../pages/Main';
import Profile from '../pages/Profile';
import Sidebar from './Sidebar';
import Artists from '../pages/Artists';
import Albums from '../pages/Albums';
import Music from '../pages/Music';
import Podcasts from '../pages/Podcasts';
import '../style/MainPage.css';

export default function MainPage() {
    return (
        <Router>
            <div className="container">
                <Header />
                <div className="content">
                    <Routes>
                        <Route exact path="/" element={<Main />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/artists" element={<Artists />} />
                        <Route path="/albums" element={<Albums />} />
                        <Route path="/music" element={<Music />} />
                        <Route path="/podcasts" element={<Podcasts />} />
                    </Routes>
                    <Sidebar />
                </div>
                <Footer />
            </div>
        </Router>
    );
}
