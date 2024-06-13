import './App.css';
import { Canvas } from '@react-three/fiber';
import { Robot } from './components/Robot';

function App() {
  return (
    <div className="relative w-full h-screen">
      <h1 className="absolute top-10 left-1/2 transform -translate-x-1/2 text-xl z-10">
        No Tutorials, No Courses
      </h1>
      <h1 className="absolute top-20 left-1/2 transform -translate-x-1/2 text-xl z-10">
        justcode
      </h1>
      <Canvas
        className="absolute top-0 left-0 w-full h-full"
        camera={{ fov: 45, position: [0, 0, 10] }}
      >
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />

        <Robot />
      </Canvas>
      <button className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10">
        Press me
      </button>
    </div>
  );
}

export default App;
