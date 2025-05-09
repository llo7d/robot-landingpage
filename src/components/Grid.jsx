import { Instances, Instance } from '@react-three/drei'


const Grid = ({ number = 23, lineWidth = 0.026, height = 0.5 }) => (
    // Renders a grid and crosses as instances, rotated to be in the background
    <Instances rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -1.02]}>
        <planeGeometry args={[lineWidth, height]} />
        <meshBasicMaterial color="#2d2d2d" />
        {Array.from({ length: number }, (_, y) =>
            Array.from({ length: number }, (_, x) => (
                <group key={x + ':' + y} position={[x * 2 - Math.floor(number / 2) * 2, -0.01, y * 2 - Math.floor(number / 2) * 2]}>
                    <Instance rotation={[-Math.PI / 2, 0, 0]} />
                    <Instance rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
                </group>
            ))
        )}
        <gridHelper args={[100, 100, '#bbb', '#bbb']} position={[0, -0.01, 0]} />
    </Instances>
)