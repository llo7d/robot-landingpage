import './App.css';
import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function App() {
  return (
    <>
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh scale={(8, 8, 4)}>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </>
  );
}

export default App;
