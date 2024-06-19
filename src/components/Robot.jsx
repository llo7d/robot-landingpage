import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function Robot(props) {
  const { nodes, materials } = useGLTF('/robot-transformed.glb');

  console.log(props.expression);

  const Expression = () => {

    if (props.expression === "Angry") {
      return (
        <mesh
          name="Angry"
          geometry={nodes.Angry.geometry}
          material={materials.Expression}
          morphTargetDictionary={nodes.Angry.morphTargetDictionary}
          morphTargetInfluences={nodes.Angry.morphTargetInfluences}
        />
      )

    } else if (props.expression === "Smile") {

      return (
        <mesh
          name="Smile"
          geometry={nodes.Smile.geometry}
          material={materials.Expression}
          morphTargetDictionary={nodes.Smile.morphTargetDictionary}
          morphTargetInfluences={nodes.Smile.morphTargetInfluences}
        />
      )
    }

  }

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Computer_Head.geometry}
        material={materials.Computer}
      />
      <mesh
        geometry={nodes.Cube.geometry}
        material={materials.Parts}
        position={[1.995, 0.04, 0.378]}
        rotation={[-0.41, 0, 0.438]}
        scale={0.974}
      />

      <Expression />

      {/* 
      <mesh
        name="Cry"
        geometry={nodes.Cry.geometry}
        material={materials.Expression}
        morphTargetDictionary={nodes.Cry.morphTargetDictionary}
        morphTargetInfluences={nodes.Cry.morphTargetInfluences}
      />
      <mesh
        name="Neutral"
        geometry={nodes.Neutral.geometry}
        material={materials.Expression}
        morphTargetDictionary={nodes.Neutral.morphTargetDictionary}
        morphTargetInfluences={nodes.Neutral.morphTargetInfluences}
      />

      <mesh
        name="Starry"
        geometry={nodes.Starry.geometry}
        material={materials.Expression}
        morphTargetDictionary={nodes.Starry.morphTargetDictionary}
        morphTargetInfluences={nodes.Starry.morphTargetInfluences}
      />
      */}

    </group>
  );
}

useGLTF.preload('/robot-transformed.glb');
