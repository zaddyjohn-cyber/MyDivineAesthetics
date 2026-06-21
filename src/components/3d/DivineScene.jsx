import { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles } from '@react-three/drei';

function HaloRing({ radius = 1.6, tube = 0.04, color = '#D4AC70', rotation = [0, 0, 0], speed = 0.3, segments = 120 }) {
  const ref = useRef();
  useFrame((_, dt) => {
    if (ref.current) {
      ref.current.rotation.z += dt * speed * 0.4;
      ref.current.rotation.x += dt * speed * 0.15;
    }
  });
  return (
    <mesh ref={ref} rotation={rotation}>
      <torusGeometry args={[radius, tube, 16, segments]} />
      <meshStandardMaterial
        color={color}
        metalness={1}
        roughness={0.18}
        emissive={color}
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

function SoftPearl({ position, scale = 0.4, color = '#F7EBD2', detail = 24 }) {
  return (
    <Float speed={1.6} floatIntensity={1.4} rotationIntensity={0.4}>
      <mesh position={position} scale={scale}>
        <sphereGeometry args={[1, detail, detail]} />
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

function Scene({ tier }) {
  // tier: "mobile" (lightest), "tablet" (medium), "desktop" (full)
  const ringSegments = tier === 'mobile' ? 64 : tier === 'tablet' ? 96 : 120;
  const pearlDetail = tier === 'mobile' ? 16 : 24;
  const particleCount = tier === 'mobile' ? 24 : tier === 'tablet' ? 50 : 75;

  return (
    <>
      <ambientLight intensity={0.7} color={'#FBF7F1'} />
      <directionalLight position={[4, 5, 3]} intensity={1.6} color={'#FFF1D8'} />
      <pointLight position={[-3, -2, 2]} intensity={1.1} color={'#F3DBD2'} />
      <pointLight position={[3, -3, -2]} intensity={0.9} color={'#EFD9B1'} />

      {/* Halo rings — the orbit */}
      <HaloRing radius={2.1} tube={0.045} color={'#D4AC70'} rotation={[Math.PI / 2.4, 0, 0]} speed={0.4} segments={ringSegments} />
      <HaloRing radius={2.6} tube={0.025} color={'#EFD9B1'} rotation={[Math.PI / 1.8, 0.3, 0]} speed={-0.3} segments={ringSegments} />
      <HaloRing radius={3.1} tube={0.015} color={'#B8843D'} rotation={[Math.PI / 3, 0.6, 0.2]} speed={0.2} segments={ringSegments} />

      {/* Pearls */}
      <SoftPearl position={[-2.2, 1.2, 0.5]} scale={0.32} color={'#F7EBD2'} detail={pearlDetail} />
      <SoftPearl position={[2.4, -1.1, 0.8]} scale={0.28} color={'#F3DBD2'} detail={pearlDetail} />
      {tier !== 'mobile' && (
        <>
          <SoftPearl position={[1.8, 1.6, -0.5]} scale={0.22} color={'#EFD9B1'} detail={pearlDetail} />
          <SoftPearl position={[-2.0, -1.4, -0.4]} scale={0.26} color={'#FBEFEB'} detail={pearlDetail} />
        </>
      )}

      {/* Golden particles */}
      <Sparkles
        count={particleCount}
        scale={[8, 6, 6]}
        size={2.4}
        speed={0.35}
        color={'#EFD9B1'}
        opacity={0.9}
      />
    </>
  );
}

function useDeviceTier() {
  const [tier, setTier] = useState('mobile');
  useEffect(() => {
    const isDesktop = window.matchMedia('(min-width: 1280px)').matches;
    const isTablet = window.matchMedia('(min-width: 768px)').matches;
    setTier(isDesktop ? 'desktop' : isTablet ? 'tablet' : 'mobile');
  }, []);
  return tier;
}

export default function DivineScene() {
  const tier = useDeviceTier();
  const maxDpr = tier === 'mobile' ? 1.25 : tier === 'tablet' ? 1.5 : 2;

  return (
    <div className="relative h-full w-full">
      <Canvas
        dpr={[1, maxDpr]}
        gl={{ antialias: tier !== 'mobile', alpha: true, powerPreference: 'high-performance' }}
        camera={{ position: [0, 0, 6], fov: 45 }}
      >
        <Suspense fallback={null}>
          <Scene tier={tier} />
        </Suspense>
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cream-50/0 via-transparent to-cream-50/40" />
    </div>
  );
}
