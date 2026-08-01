"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Icosahedron, Environment, Float } from "@react-three/drei";
import * as THREE from "three";

function AnimatedShape() {
  const meshRef = useRef<THREE.Mesh>(null);
  const targetRotation = useRef({ x: 0, y: 0 });

  // Update target rotation based on mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates from -1 to 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      
      // Parallax effect scaling
      targetRotation.current.x = y * 0.2;
      targetRotation.current.y = x * 0.2;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    
    // Constant slow rotation
    meshRef.current.rotation.x += delta * 0.1;
    meshRef.current.rotation.y += delta * 0.15;

    // Smoothly interpolate to the target parallax rotation
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, meshRef.current.rotation.x + targetRotation.current.x, 0.05);
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, meshRef.current.rotation.y + targetRotation.current.y, 0.05);
  });

  return (
    <Float
      speed={1.5} 
      rotationIntensity={1} 
      floatIntensity={2} 
      floatingRange={[-0.1, 0.1]}
    >
      <Icosahedron ref={meshRef} args={[1.2, 1]} position={[0, -0.5, -1]}>
        <meshStandardMaterial 
          color="#10B981" 
          emissive="#10B981"
          emissiveIntensity={0.5}
          wireframe={true} 
          transparent={true}
          opacity={0.3}
        />
      </Icosahedron>
      
      {/* Core solid shape inside the wireframe */}
      <Icosahedron args={[1.1, 1]} position={[0, -0.5, -1]}>
        <meshStandardMaterial 
          color="#0A0A0A" 
          emissive="#3B82F6"
          emissiveIntensity={0.1}
          roughness={0.2}
          metalness={0.8}
        />
      </Icosahedron>
    </Float>
  );
}

export default function HeroScene() {
  const [shouldRender, setShouldRender] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Pause rendering when scrolled out of view to save battery/perf
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShouldRender(entry.isIntersecting),
      { threshold: 0 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    // Check prefers-reduced-motion dynamically
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setShouldRender(false);
    }
    
    const listener = (e: MediaQueryListEvent) => {
      if (e.matches) setShouldRender(false);
      // Re-enable rendering only if it's currently intersecting
      else if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setShouldRender(true);
        }
      }
    };
    
    mediaQuery.addEventListener("change", listener);
    
    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener("change", listener);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none opacity-40">
      {shouldRender ? (
        <Canvas
          dpr={[1, 2]} // Cap pixel ratio to 2 for performance
          camera={{ position: [0, 0, 5], fov: 45 }}
          gl={{ antialias: false, alpha: true }} // Turn off antialiasing for low poly
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} color="#10B981" />
          <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#F59E0B" />
          <AnimatedShape />
        </Canvas>
      ) : (
        // Static fallback for reduced motion or when off-screen
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 blur-[100px] rounded-full" />
      )}
    </div>
  );
}
