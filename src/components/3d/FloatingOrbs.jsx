import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, Environment, MeshTransmissionMaterial, Sparkles } from '@react-three/drei';

function Orbs() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 4, 2]} intensity={1.1} color={'#FFF1D8'} />
      <pointLight position={[-3, -2, 1]} intensity={0.8} color={'#F3DBD2'} />

      <Float speed={1.3} floatIntensity={1.2} rotationIntensity={0.5}>
        <mesh position={[-1.2, 0.4, 0]}>
          <sphereGeometry args={[0.55, 64, 64]} />
          <MeshTransmissionMaterial
            backside
            samples={4}
            thickness={1}
            chromaticAberration={0.06}
            ior={1.4}
            roughness={0.08}
            color={'#FBEFEB'}
          />
        </mesh>
      </Float>
      <Float speed={1.6} floatIntensity={1.4} rotationIntensity={0.4}>
        <mesh position={[1.1, -0.3, -0.2]} scale={0.7}>
          <sphereGeometry args={[0.55, 48, 48]} />
          <meshPhysicalMaterial
            color={'#EFD9B1'}
            metalness={0.5}
            roughness={0.2}
            clearcoat={1}
          />
        </mesh>
      </Float>
      <Float speed={1.2} floatIntensity={0.8} rotationIntensity={0.6}>
        <mesh position={[0.4, 1.1, -0.6]} scale={0.4}>
          <sphereGeometry args={[0.55, 48, 48]} />
          <meshPhysicalMaterial
            color={'#F3DBD2'}
            metalness={0.3}
            roughness={0.3}
            clearcoat={1}
            sheen={0.5}
            sheenColor={'#FBEFEB'}
          />
        </mesh>
      </Float>

      <Sparkles count={50} scale={[5, 4, 4]} size={2} speed={0.3} color={'#EFD9B1'} opacity={0.8} />
      <Environment preset="studio" />
    </>
  );
}

export default function FloatingOrbs({ className = '' }) {
  const [enabled, setEnabled] = useState(true);
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) setEnabled(false);
  }, []);

  if (!enabled) return null;

  return (
    <div className={`pointer-events-none ${className}`}>
      <Canvas dpr={[1, 1.8]} gl={{ alpha: true, antialias: true }} camera={{ position: [0, 0, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <Orbs />
        </Suspense>
      </Canvas>
    </div>
  );
}
