import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import { Home, About, Projects, Contact } from './pages';
import Navbar from './components/Navbar';
import { useState, useRef, useEffect } from 'react';
import suzume from './assets/Suzume.mp3';
import soundon from './assets/icons/soundon.png';
import soundoff from './assets/icons/soundoff.png';

const AppContent = () => {
  const location = useLocation();
  const audioRef = useRef(null);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio(suzume);
    audioRef.current.volume = 0.4;
    audioRef.current.loop = true;

    
    const handleFirstInteraction = () => {
      if (audioRef.current && !isPlayingMusic) {
        audioRef.current.play();
        setIsPlayingMusic(true);
      }
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('touchstart', handleFirstInteraction);

    return () => {
      audioRef.current.pause();
      audioRef.current = null;
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, []);


  useEffect(() => {
    if (!audioRef.current) return;
    const noMusicPages = ['/projects', '/contact'];
    if (noMusicPages.includes(location.pathname)) {
      audioRef.current.pause();
      setIsPlayingMusic(false);
    }
  }, [location.pathname]);

  
  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlayingMusic) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlayingMusic]);

  return (
    <main className='bg-slate-300/20 h-full'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      
      <div className='fixed bottom-2 left-2 z-50'>
        <img
          src={isPlayingMusic ? soundon : soundoff}
          alt='sound'
          className='w-10 h-10 cursor-pointer object-contain'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>
    </main>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;