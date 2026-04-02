"use client";

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  useGLTF,
  ContactShadows,
} from "@react-three/drei";
import { Suspense, useMemo, useEffect } from "react";
import * as THREE from "three";

type ConfigType = {
  material: string;
  color: {
    name: string;
    hex: string;
  };
  size: string;
  finish: string;
  burnishing: boolean;
};

type ShoeViewerProps = {
  config: ConfigType;
};

function ShoeModel({
  config,
}: {
  config: ConfigType;
}) {
  const { scene } = useGLTF("/models/shoe.glb");

  const normalizedScene = useMemo(() => {
    const clonedScene = scene.clone();

    const box = new THREE.Box3().setFromObject(clonedScene);
    const size = new THREE.Vector3();
    box.getSize(size);

    const center = new THREE.Vector3();
    box.getCenter(center);

    clonedScene.position.sub(center);

    const maxDimension = Math.max(
      size.x,
      size.y,
      size.z
    );

    const scaleFactor = 2.2 / maxDimension;
    clonedScene.scale.setScalar(scaleFactor);

    return clonedScene;
  }, [scene]);

  useEffect(() => {
    normalizedScene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = child.material.clone();

        const material =
          child.material as THREE.MeshStandardMaterial;

        material.color = new THREE.Color(
          config.color.hex
        );

        material.roughness =
          config.material === "Luxe Calf"
            ? 0.25
            : config.material === "Box Calf"
            ? 0.45
            : 0.1;

        material.metalness = config.burnishing
          ? 0.2
          : 0.05;

        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [normalizedScene, config]);

  return (
    <primitive
      object={normalizedScene}
      position={[0, -0.3, 0]}
      rotation={[0.08, 0.55, 0]}
    />
  );
}

export default function ShoeViewer({
  config,
}: ShoeViewerProps) {
  return (
    <div className="h-[700px] w-full">
      <Canvas
        shadows
        camera={{ position: [0, 0.5, 6.5], fov: 40 }}
      >
        <ambientLight intensity={1.6} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={2}
          castShadow
        />

        <Environment preset="studio" />

        <Suspense fallback={null}>
          <ShoeModel config={config} />
        </Suspense>

        <ContactShadows
          position={[0, -1.2, 0]}
          opacity={0.35}
          scale={6}
          blur={2}
        />

        {/* ZOOM ENABLED */}
        <OrbitControls
          enableZoom={true}
          minDistance={3}
          maxDistance={10}
          autoRotate
          autoRotateSpeed={0.6}
        />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/models/shoe.glb");