import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Sparkles, Sphere, Stars, MeshDistortMaterial, Torus } from '@react-three/drei';
import * as THREE from 'three';

// Custom Floating Lanterns / Fireflies Component
const FloatingLanterns = ({ count = 50, color = "#ffcf70", size = 0.2 }) => {
  const meshRef = useRef();
  
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
      particle.position[1] += particle.speed;
      particle.position[0] += Math.sin(time * particle.swaySpeed + particle.swayOffset) * 0.005;

      if (particle.position[1] > 12) {
        particle.position[1] = -12 - Math.random() * 5;
        particle.position[0] = (Math.random() - 0.5) * 30;
      }

      dummy.position.set(...particle.position);
      dummy.rotation.set(0, time * 0.5, 0);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, count]}>
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

// 1. Midnight Royal
const MidnightScene = () => {
  return (
    <>
      <ambientLight intensity={0.2} color="#0a1128" />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#b76e79" />
      <FloatingLanterns count={60} color="#ffb347" size={0.15} />
      <FloatingLanterns count={30} color="#ffcf70" size={0.25} />
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

// ─── Floating 3D Balloon Component with Parallax ─────────────────────
const FloatingBalloon = ({ position, color, scale, speed, floatIntensity, parallaxFactor }) => {
  const groupRef = useRef();
  
  useFrame((state) => {
    if (groupRef.current) {
      // Mouse parallax effect
      const targetX = (state.mouse.x * parallaxFactor) + position[0];
      const targetY = (state.mouse.y * parallaxFactor) + position[1];
      
      // Smoothly interpolate towards target
      groupRef.current.position.x += (targetX - groupRef.current.position.x) * 0.05;
      groupRef.current.position.y += (targetY - groupRef.current.position.y) * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <Float speed={speed} rotationIntensity={0.5} floatIntensity={floatIntensity}>
        {/* Main balloon body */}
        <mesh position={[0, 0, 0]} scale={scale}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.2}
            roughness={0.2}
            metalness={0.1}
            transparent
            opacity={0.9}
          />
        </mesh>
        {/* Balloon knot at bottom */}
        <mesh position={[0, -1 * scale[1] * 0.95, 0]} scale={[scale[0]*0.2, scale[1]*0.2, scale[2]*0.2]}>
          <coneGeometry args={[1, 1, 16]} />
          <meshStandardMaterial color={color} roughness={0.3} metalness={0.1} />
        </mesh>
        {/* Balloon string */}
        <mesh position={[0, -1 * scale[1] - 1 * scale[1], 0]}>
          <cylinderGeometry args={[0.01, 0.01, 2 * scale[1]]} />
          <meshStandardMaterial color="#ffffff" transparent opacity={0.5} />
        </mesh>
      </Float>
    </group>
  );
};

const EtherealScene = () => {
  return (
    <>
      <ambientLight intensity={1.5} color="#ffffff" />
      <directionalLight position={[5, 10, 5]} intensity={1.2} color="#f5deb3" />
      <pointLight position={[0, 0, -2]} intensity={1} color="#d4af37" distance={8} />

      {/* Floating 3D Balloons with Parallax */}
      <FloatingBalloon position={[-5, -1, -4]} color="#ffb6c1" scale={[1.2, 1.4, 1.2]} speed={1.5} floatIntensity={2} parallaxFactor={-3} />
      <FloatingBalloon position={[5, 2, -5]} color="#add8e6" scale={[1, 1.2, 1]} speed={2} floatIntensity={1.5} parallaxFactor={2} />
      <FloatingBalloon position={[-3, 3, -6]} color="#e6e6fa" scale={[0.8, 1, 0.8]} speed={1.2} floatIntensity={3} parallaxFactor={1.5} />
      <FloatingBalloon position={[4, -2, -3]} color="#ffebcd" scale={[1.5, 1.8, 1.5]} speed={1.8} floatIntensity={2.5} parallaxFactor={-2} />

      <Sparkles count={280} scale={22} size={4} speed={0.08} opacity={0.35} color="#d4af37" noise={1} />
      <Sparkles count={120} scale={16} size={7} speed={0.04} opacity={0.18} color="#ffffff" noise={2} />
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
    case 'mesh':     return <MeshScene />;
    case 'ethereal': return <EtherealScene />;
    case 'liquid':   return <LiquidScene />;
    case 'starry':   return <StarryScene />;
    case 'midnight':
    default:
      return <MidnightScene />;
  }
}
