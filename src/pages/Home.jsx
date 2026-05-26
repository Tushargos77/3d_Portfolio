import { useState, Suspense, useRef, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import { Island } from '../models/Island';
import Bird from '../models/Bird';
import Plane from '../models/Plane';
import HomeInfo from '../components/HomeInfo';
import suzume from '../assets/Suzume.mp3';
import soundon from '../assets/icons/soundon.png';
import soundoff from '../assets/icons/soundoff.png';

const Home = () => {
  const audioRef = useRef(new Audio(suzume));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }
    return () => {
      audioRef.current.pause();
    }
  }, [isPlayingMusic]);

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -8.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [1.2, 1.2, 1.2];
    } else {
      screenScale = [1.8, 1.8, 1.8];
    }

    return [screenScale, screenPosition, rotation];
  }

  const adjustPlaneSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, 1.5, 0];
    } else {
      screenScale = [5, 5, 5];
      screenPosition = [0, 0, 10];
    }

    return [screenScale, screenPosition];
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneSize();

  return (
    <section className="w-full h-screen relative">

      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000, position: [0, 5, 28] }}
        style={{ background: 'linear-gradient(to bottom, #2c1654, #ff6b35, #ffa552)' }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight position={[0, 50, 10]} intensity={0.5} />
          <hemisphereLight groundColor="#000000" intensity={1} />
          <Bird />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            isRotating={isRotating}
            scale={planeScale}
            position={planePosition}
            rotation={[0, 1.5, 0]}
          />
        </Suspense>
      </Canvas>

      <div className='absolute bottom-2 left-2'>
        <img
          src={isPlayingMusic ? soundon : soundoff}
          alt='sound'
          className='w-10 h-10 cursor-pointer object-contain'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>
    </section>
  )
}

export default Home