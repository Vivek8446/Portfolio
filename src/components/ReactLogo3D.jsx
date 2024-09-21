import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';

const ReactLogo3D = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial attach="material" color="#61DAFB" />
      </Sphere>
      <OrbitControls />
    </Canvas>
  );
};

export default ReactLogo3D;
