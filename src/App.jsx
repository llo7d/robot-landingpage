import './App.css';
import { Canvas } from '@react-three/fiber';
import { Robot } from './components/Robot';
import { Stage, OrbitControls, Scroll, ScrollControls, Html } from '@react-three/drei'
import { useState } from 'react';

function App() {

  const [expression, setExpression] = useState("Smile");

  return (

    <div className="relative w-full h-screen">
      <Canvas flat shadows camera={{ position: [0, 0, 20], fov: 25 }}>
        <ScrollControls pages={3} distance={1.2} damping={0.1}>
          <fog attach="fog" args={['black', 15, 22.5]} />
          <Stage intensity={0.5} environment="studio" shadows={{ type: 'accumulative', bias: -0.001, intensity: Math.PI }} adjustCamera={false}>
            <Robot expression={expression} />
          </Stage>
          <OrbitControls enableZoom={false} makeDefault minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />

          <Scroll html style={{ width: '100%' }}>

            <div className="relative w-full h-screen">
              <h1 className="absolute top-10 left-1/2 transform -translate-x-1/2 text-xl z-10">
                No Wall, No e
              </h1>
              <h1 className="absolute top-20 left-1/2 transform -translate-x-1/2 text-xl z-10">
                Wall-e
              </h1>

              <button className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10"
                onMouseOver={() => { setExpression("Angry"); }}
                onMouseLeave={() => { setExpression("Smile") }}
              >
                Press me
              </button>
            </div>

            <div className="relative w-full h-screen">
              <h1 className="absolute top-10 left-1/2 transform -translate-x-1/2 text-xl z-10">
                No Wall, No e
              </h1>
              <h1 className="absolute top-20 left-1/2 transform -translate-x-1/2 text-xl z-10">
                Wall-e
              </h1>

              <button className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10"
                onMouseOver={() => { setExpression("Cry"); }}
                onMouseLeave={() => { setExpression("Smile") }}
              >
                Press me
              </button>
            </div>

            <div className="relative w-full h-screen">
              <h1 className="absolute top-10 left-1/2 transform -translate-x-1/2 text-xl z-10">
                No Wall, No e
              </h1>
              <h1 className="absolute top-20 left-1/2 transform -translate-x-1/2 text-xl z-10">
                Wall-e
              </h1>

              <button className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10"
                onMouseOver={() => { setExpression("Starry"); }}
                onMouseLeave={() => { setExpression("Smile") }}
              >
                Press me
              </button>
            </div>

          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  );
}




export default App;
