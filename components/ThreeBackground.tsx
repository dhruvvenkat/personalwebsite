"use client";

import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";

function RotatingSphere() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Slow, subtle rotation
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.2, 24, 24]} />
      <meshBasicMaterial
        wireframe
        color="#ffffff"
        opacity={0.05}
        transparent
      />
    </mesh>
  );
}

export function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        gl={{ 
          alpha: true, 
          antialias: false,
          powerPreference: "low-power",
          stencil: false,
          depth: false
        }}
        dpr={[1, 1.5]}
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={null}>
          <RotatingSphere />
        </Suspense>
      </Canvas>
    </div>
  );
}

