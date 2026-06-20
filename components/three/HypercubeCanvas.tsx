'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// 4D hypercube projected to 3D vertices
const VERTICES_4D = (() => {
  const v: [number, number, number, number][] = [];
  for (let x = -1; x <= 1; x += 2)
    for (let y = -1; y <= 1; y += 2)
      for (let z = -1; z <= 1; z += 2)
        for (let w = -1; w <= 1; w += 2)
          v.push([x, y, z, w]);
  return v;
})();

const EDGES_4D: [number, number][] = [];
for (let i = 0; i < VERTICES_4D.length; i++) {
  for (let j = i + 1; j < VERTICES_4D.length; j++) {
    let diff = 0;
    for (let k = 0; k < 4; k++) if (VERTICES_4D[i][k] !== VERTICES_4D[j][k]) diff++;
    if (diff === 1) EDGES_4D.push([i, j]);
  }
}

function project4Dto3D(
  v: [number, number, number, number],
  w: number
): THREE.Vector3 {
  const dist = 3;
  const scale = dist / (dist - v[3] * Math.cos(w));
  return new THREE.Vector3(v[0] * scale, v[1] * scale, v[2] * scale);
}

export default function HypercubeCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene setup
    const width = container.clientWidth;
    const height = container.clientHeight;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.set(0, 0, 5);

    // Build line geometry from 4D→3D projection
    const lineGroup = new THREE.Group();
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x00d9ff,
      transparent: true,
      opacity: 0.75,
    });

    let angle4D = 0;

    const buildEdges = () => {
      while (lineGroup.children.length) {
        (lineGroup.children[0] as THREE.Line).geometry.dispose();
        lineGroup.remove(lineGroup.children[0]);
      }
      const projected = VERTICES_4D.map((v) => project4Dto3D(v, angle4D));
      EDGES_4D.forEach(([a, b]) => {
        const geo = new THREE.BufferGeometry().setFromPoints([projected[a], projected[b]]);
        lineGroup.add(new THREE.Line(geo, lineMaterial));
      });
    };

    buildEdges();
    scene.add(lineGroup);

    // Resize handler
    const onResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', onResize);

    // Animation loop
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      lineGroup.rotation.x += 0.004;
      lineGroup.rotation.y += 0.007;
      angle4D += 0.008;
      buildEdges();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-full"
      style={{ filter: 'drop-shadow(0 0 24px rgba(0,217,255,0.5))' }}
      aria-hidden="true"
    />
  );
}
