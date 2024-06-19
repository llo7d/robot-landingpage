import './App.css';
import { Canvas } from '@react-three/fiber';
import { Robot } from './components/Robot';
import { Stage, OrbitControls, ScrollControls, Html, Scroll, Float } from '@react-three/drei';
import { useState } from 'react';

function App() {
  const [expression, setExpression] = useState("Smile");

  return (
    <div className="relative w-full h-screen">
      <Canvas flat shadows camera={{ position: [0, 0, 20], fov: 25 }}>
        <fog attach="fog" args={['black', 15, 22.5]} />
        <Stage intensity={0.5} environment="studio" shadows={{ type: 'accumulative', bias: -0.001, intensity: Math.PI }} adjustCamera={false}>
          <Robot expression={expression} />
        </Stage>
        <OrbitControls enableZoom={false} makeDefault minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />

        <ScrollControls pages={3} distance={1} damping={0}>

          <Scroll html>
            <div className="w-full h-full flex flex-col justify-between">
              {/* Section 1 */}
              <div className="h-screen flex flex-col justify-between items-center">
                <h1 className="mt-10 text-xl z-10">No wall, no e... Wall-e</h1>


                <button
                  className="mb-10 z-10"
                  onMouseOver={() => setExpression("Angry")}
                  onMouseLeave={() => setExpression("Smile")}
                >
                  Press me
                </button>
              </div>

              {/* Section 2 */}
              <div className="h-screen flex flex-col justify-between items-center">
                <h1 className="mt-10 text-xl z-10">Go trash</h1>
                <button
                  className="mb-10 z-10"
                  onMouseOver={() => setExpression("Happy")}
                  onMouseLeave={() => setExpression("Smile")}
                >
                  Hello
                </button>
              </div>

              {/* Section 3 */}
              <div className="h-screen flex flex-col justify-between items-center">
                <h1 className="mt-10 text-xl z-10">New Section 2</h1>
                <button
                  className="mb-10 z-10"
                  onMouseOver={() => setExpression("Surprised")}
                  onMouseLeave={() => setExpression("Smile")}
                >
                  Button 2
                </button>
              </div>
            </div>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  );
}

export default App;
