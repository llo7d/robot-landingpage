import './App.css';
import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function App() {
  return (
    <>
      <h1 className="text-3xl">Cute robot, Good ideas</h1>
      <h1 className="text-3xl">just great</h1>
      <div className="flex flex-col items-center justify-center">
        <Canvas className="self-center">
          <ambientLight intensity={0.1} />
          <directionalLight color="red" position={[0, 0, 5]} />
          <mesh
            scale={(2.5, 2.5, 2.5)}
            position={[0, 0.8, 0]}
            rotation={[0, 0.6, 0]}
          >
            <boxGeometry />
            <meshStandardMaterial />
          </mesh>
        </Canvas>
        <button className="mt-[-40%] text-2xl">Press me</button>
      </div>
    </>
  );
}

export default App;
