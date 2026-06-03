import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Sparkles, Sphere, Stars, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Custom Floating Lanterns / Fireflies Component
const FloatingLanterns = ({ count = 50, color = "#ffcf70", size = 0.2 }) => {
  const meshRef = useRef();
  
  // Initialize random positions, rotations, and rising speeds
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 30, 
          (Math.random() - 0.5) * 20, 
          (Math.random() - 0.5) * 15 - 5
        ],
        speed: Math.random() * 0.01 + 0.005,
        swaySpeed: Math.random() * 0.02 + 0.01,
        swayOffset: Math.random() * Math.PI * 2,
      });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.elapsedTime;
    
    particles.forEach((particle, i) => {
      // Float up
      particle.position[1] += particle.speed;
      // Gently sway horizontally
      particle.position[0] += Math.sin(time * particle.swaySpeed + particle.swayOffset) * 0.005;

      // Reset to bottom if it floats above screen
      if (particle.position[1] > 12) {
        particle.position[1] = -12 - Math.random() * 5;
        particle.position[0] = (Math.random() - 0.5) * 30;
      }

      dummy.position.set(...particle.position);
      // Slight gentle rotation just in case
      dummy.rotation.set(0, time * 0.5, 0);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, count]}>
      {/* Small glowing orb shape */}
      <sphereGeometry args={[size, 16, 16]} />
      <meshStandardMaterial 
        color={color} 
        emissive={color} 
        emissiveIntensity={1.5} 
        toneMapped={false} 
        transparent 
        opacity={0.8}
      />
    </instancedMesh>
  );
};

// 1. Midnight Royal (Bokeh & Floating Lanterns)
const MidnightScene = () => {
  return (
    <>
      <ambientLight intensity={0.2} color="#0a1128" />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#b76e79" />
      
      {/* Floating Warm Lanterns */}
      <FloatingLanterns count={60} color="#ffb347" size={0.15} />
      <FloatingLanterns count={30} color="#ffcf70" size={0.25} />

      {/* Subtle Bokeh Lights (Large, slow, blurred sparkles) */}
      <Sparkles count={30} scale={25} size={25} speed={0.1} opacity={0.1} color="#ffb347" />
      <Sparkles count={15} scale={20} size={40} speed={0.05} opacity={0.08} color="#ffffff" />
    </>
  );
};

// 2. Dreamy Mesh Gradient (Glass Orbs)
const MeshScene = () => {
  return (
    <>
      <ambientLight intensity={1} color="#ffffff" />
      <directionalLight position={[5, 5, 5]} intensity={2} color="#a090e0" />
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[2, 64, 64]} position={[-3, 1, -2]}>
          <MeshDistortMaterial color="#ffd1dc" distort={0.4} speed={2} roughness={0.1} metalness={0.8} transparent opacity={0.6} />
        </Sphere>
      </Float>
      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
        <Sphere args={[1.5, 64, 64]} position={[3, -1, -3]}>
          <MeshDistortMaterial color="#e0c3fc" distort={0.5} speed={1.5} roughness={0.1} metalness={0.8} transparent opacity={0.6} />
        </Sphere>
      </Float>
      <Sparkles count={100} scale={12} size={4} speed={0.2} opacity={0.3} color="#ffffff" />
    </>
  );
};

// 3. Ethereal Pearl White (Floating Feathers / Orbs)
const EtherealScene = () => {
  return (
    <>
      <ambientLight intensity={1.5} color="#ffffff" />
      <directionalLight position={[0, 10, 0]} intensity={1} color="#f5deb3" />
      <Sparkles count={300} scale={20} size={5} speed={0.1} opacity={0.4} color="#d4af37" noise={1} />
      <Sparkles count={150} scale={15} size={8} speed={0.05} opacity={0.2} color="#ffffff" noise={2} />
    </>
  );
};

// 4. Liquid Gold Shader
const LiquidScene = () => {
  const meshRef = useRef();
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = -Math.PI / 2;
      meshRef.current.position.y = -3;
    }
  });
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={2} color="#ffd700" />
      <mesh ref={meshRef}>
        <planeGeometry args={[30, 30, 128, 128]} />
        <MeshDistortMaterial color="#1a1a1a" emissive="#ffd700" emissiveIntensity={0.2} distort={0.3} speed={1.5} roughness={0.2} metalness={1} />
      </mesh>
      <Sparkles count={50} scale={20} size={2} speed={0.5} opacity={0.2} color="#ffd700" />
    </>
  );
};

// 5. Starry Constellation
const StarryScene = () => {
  const groupRef = useRef();
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    }
  });
  return (
    <>
      <ambientLight intensity={0.2} color="#1a0b1c" />
      <group ref={groupRef}>
        <Stars radius={50} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        <Sparkles count={100} scale={20} size={4} speed={0.2} opacity={0.6} color="#cda2d4" />
      </group>
    </>
  );
};

export default function ThreeScene({ theme }) {
  switch (theme) {
    case 'mesh': return <MeshScene />;
    case 'ethereal': return <EtherealScene />;
    case 'liquid': return <LiquidScene />;
    case 'starry': return <StarryScene />;
    case 'midnight':
    default:
      return <MidnightScene />;
  }
}
