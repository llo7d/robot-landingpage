import './App.css';
import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Robot } from './components/Robot';

function App() {
  return (
    <div className="flex flex-col h-screen justify-between items-center">
      <h1 className="mt-10 text-xl">No Tutorials, No Courses</h1>
      <h1 className="mt-2 text-xl">justcode</h1>
      <Canvas className="flex-grow">
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />

        <Robot />
      </Canvas>
      <button className="mb-20">Press mee</button>
    </div>
  );
}

export default App;
