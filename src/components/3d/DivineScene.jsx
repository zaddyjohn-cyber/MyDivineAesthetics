import { Suspense, useMemo, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, MeshTransmissionMaterial, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

function HaloRing({ radius = 1.6, tube = 0.04, color = '#D4AC70', position = [0, 0, 0], rotation = [0, 0, 0], speed = 0.3 }) {
  const ref = useRef();
  useFrame((_, dt) => {
    if (ref.current) {
      ref.current.rotation.z += dt * speed * 0.4;
      ref.current.rotation.x += dt * speed * 0.15;
    }
  });
  return (
    <mesh ref={ref} position={position} rotation={rotation}>
      <torusGeometry args={[radius, tube, 32, 160]} />
      <meshStandardMaterial
        color={color}
        metalness={1}
        roughness={0.18}
        emissive={color}
        emissiveIntensity={0.25}
      />
    </mesh>
  );
}

function GlassSphere({ position, scale = 1, color = '#FBEFEB' }) {
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh position={position} scale={scale}>
        <sphereGeometry args={[0.6, 64, 64]} />
        <MeshTransmissionMaterial
          backside
          samples={6}
          thickness={1.2}
          chromaticAberration={0.08}
          anisotropy={0.3}
          distortion={0.2}
          distortionScale={0.4}
          temporalDistortion={0.05}
          ior={1.4}
          roughness={0.05}
          color={color}
        />
      </mesh>
    </Float>
  );
}

function SoftPearl({ position, scale = 0.4, color = '#F7EBD2' }) {
  return (
    <Float speed={1.6} floatIntensity={1.4} rotationIntensity={0.4}>
      <mesh position={position} scale={scale}>
        <sphereGeometry args={[1, 48, 48]} />
        <meshPhysicalMaterial
          color={color}
          metalness={0.4}
          roughness={0.25}
          clearcoat={1}
          clearcoatRoughness={0.2}
          sheen={0.6}
          sheenColor={'#F3DBD2'}
        />
      </mesh>
    </Float>
  );
}

function FloatingCapsule({ position, rotation, color = '#EFD9B1' }) {
  return (
    <Float speed={1.1} floatIntensity={0.8} rotationIntensity={0.3}>
      <mesh position={position} rotation={rotation}>
        <capsuleGeometry args={[0.13, 0.7, 8, 24]} />
        <meshPhysicalMaterial
          color={color}
          metalness={0.7}
          roughness={0.2}
          clearcoat={1}
          clearcoatRoughness={0.05}
        />
      </mesh>
    </Float>
  );
}

function Scene({ reduced }) {
  return (
    <>
      <ambientLight intensity={0.55} color={'#FBF7F1'} />
      <directionalLight position={[4, 5, 3]} intensity={1.4} color={'#FFF1D8'} />
      <pointLight position={[-3, -2, 2]} intensity={1.1} color={'#F3DBD2'} />
      <pointLight position={[3, -3, -2]} intensity={0.8} color={'#EFD9B1'} />

      {/* Center glass sphere */}
      <GlassSphere position={[0, 0.1, 0]} scale={1.8} color={'#FBEFEB'} />

      {/* Halo rings */}
      <HaloRing radius={2.1} tube={0.045} color={'#D4AC70'} rotation={[Math.PI / 2.4, 0, 0]} speed={0.4} />
      <HaloRing radius={2.6} tube={0.025} color={'#EFD9B1'} rotation={[Math.PI / 1.8, 0.3, 0]} speed={-0.3} />
      <HaloRing radius={3.1} tube={0.015} color={'#B8843D'} rotation={[Math.PI / 3, 0.6, 0.2]} speed={0.2} />

      {/* Pearls */}
      <SoftPearl position={[-2.2, 1.2, 0.5]} scale={0.32} color={'#F7EBD2'} />
      <SoftPearl position={[2.4, -1.1, 0.8]} scale={0.28} color={'#F3DBD2'} />
      <SoftPearl position={[1.8, 1.6, -0.5]} scale={0.22} color={'#EFD9B1'} />
      <SoftPearl position={[-2.0, -1.4, -0.4]} scale={0.26} color={'#FBEFEB'} />

      {/* Subtle syringe-inspired capsules (abstract) */}
      {!reduced && (
        <>
          <FloatingCapsule position={[-2.8, 0.4, -1]} rotation={[0.4, 0.3, 0.6]} color={'#EFD9B1'} />
          <FloatingCapsule position={[2.6, 0.2, -1.2]} rotation={[-0.3, 0.6, -0.5]} color={'#F3DBD2'} />
        </>
      )}

      {/* Golden particles */}
      <Sparkles
        count={reduced ? 40 : 90}
        scale={[8, 6, 6]}
        size={2.4}
        speed={0.35}
        color={'#EFD9B1'}
        opacity={0.9}
      />

      <Environment preset="studio" />
    </>
  );
}

export default function DivineScene({ compact = false }) {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReduced(isMobile || prefersReduced);
  }, []);

  return (
    <div className={`relative ${compact ? 'h-[420px]' : 'h-[520px] sm:h-[600px] lg:h-[680px]'} w-full`}>
      <Canvas
        dpr={[1, reduced ? 1.5 : 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        camera={{ position: [0, 0, 6], fov: 45 }}
      >
        <Suspense fallback={null}>
          <Scene reduced={reduced} />
        </Suspense>
      </Canvas>
      {/* Soft top and bottom fades to blend with the page */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cream-50/0 via-transparent to-cream-50/40" />
    </div>
  );
}
