"use client";

import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function GlobeDotsGroup() {
  const [pointData, setPointData] = useState<{positions: Float32Array, colors: Float32Array, sizes: Float32Array} | null>(null);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    // Using a specular map of the Earth where water is white and land is black.
    // This allows us to accurately place dots only on the continents.
    img.src = 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg';
    
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 256;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imgData.data;

      const posArray: number[] = [];
      const colorArray: number[] = [];
      const sizeArray: number[] = [];
      
      const colorLeft = new THREE.Color('#d8b4fe'); // Light Purple (purple-300)
      const colorRight = new THREE.Color('#f9a8d4'); // Light Pink (pink-300)
      
      // We sample 22000 points spherically and cull those that fall on water
      const targetPoints = 22000; 
      
      for (let i = 0; i < targetPoints; i++) {
        // Spherical Fibonacci point generation for even distribution
        const phi = Math.acos(1 - 2 * (i + 0.5) / targetPoints);
        const theta = Math.PI * (1 + Math.sqrt(5)) * i;
        
        // Map 3D coordinate to 2D UV coordinate
        let u = (theta % (2 * Math.PI)) / (2 * Math.PI);
        if (u < 0) u += 1;
        const v = phi / Math.PI;

        const xPixel = Math.floor(u * canvas.width);
        const yPixel = Math.floor(v * canvas.height);
        
        const idx = (yPixel * canvas.width + xPixel) * 4;
        const rVal = data[idx]; // Specular map: water > 200, land < 50
        
        const isLand = rVal < 100;
        
        const r = 2; 
        const x = r * Math.sin(phi) * Math.cos(theta);
        const y = r * Math.sin(phi) * Math.sin(theta);
        const z = r * Math.cos(phi);
        
        posArray.push(x, y, z);
        
        if (isLand) {
          const mixRatio = (x + r) / (r * 2); // 0 to 1 based on X axis
          const mixedColor = colorLeft.clone().lerp(colorRight, mixRatio);
          
          colorArray.push(mixedColor.r, mixedColor.g, mixedColor.b);
          sizeArray.push(Math.random() * 0.5 + 0.5); // Random base size
        } else {
          // Water dots: very faint purple, small size
          const waterColor = new THREE.Color('#f3e8ff'); // purple-100
          colorArray.push(waterColor.r, waterColor.g, waterColor.b);
          sizeArray.push(Math.random() * 0.15 + 0.15); // Much smaller
        }
      }
      
      setPointData({
        positions: new Float32Array(posArray),
        colors: new Float32Array(colorArray),
        sizes: new Float32Array(sizeArray)
      });
    };
  }, []);

  const uniforms = useMemo(() => ({
    time: { value: 0 }
  }), []);

  useFrame((state) => {
    uniforms.time.value = state.clock.elapsedTime;
  });

  if (!pointData) return null;

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={pointData.positions.length / 3} array={pointData.positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={pointData.colors.length / 3} array={pointData.colors} itemSize={3} />
        <bufferAttribute attach="attributes-size" count={pointData.sizes.length} array={pointData.sizes} itemSize={1} />
      </bufferGeometry>
      <shaderMaterial
        transparent
        depthWrite={false}
        uniforms={uniforms}
        vertexShader={`
          attribute vec3 color;
          attribute float size;
          varying vec3 vColor;
          uniform float time;
          void main() {
            vColor = color;
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            // Pulsing effect
            float pulse = sin(time * 3.0 + position.x * 5.0 + position.y * 5.0) * 0.5 + 0.5;
            // Kept the dot size prominent and crisp as adjusted previously
            gl_PointSize = size * (3.5 + pulse * 1.0) * (4.5 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
          }
        `}
        fragmentShader={`
          varying vec3 vColor;
          void main() {
            vec2 xy = gl_PointCoord.xy - vec2(0.5);
            float ll = length(xy);
            if (ll > 0.5) discard;
            // Crisp edge
            float alpha = smoothstep(0.5, 0.45, ll);
            gl_FragColor = vec4(vColor, alpha * 0.95);
          }
        `}
      />
    </points>
  );
}

function GlobeWithLabels() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05; // Very slow rotation
    }
  });

  return (
    <group ref={groupRef}>
      <GlobeDotsGroup />
    </group>
  );
}

export default function GlobeVisual() {
  return (
    <div className="absolute top-[25%] max-[767px]:left-0 max-[767px]:w-[160%] md:left-[30%] md:w-full h-full pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5.5], fov: 45 }}>
        <GlobeWithLabels />
      </Canvas>
    </div>
  );
}
