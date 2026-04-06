"use client";

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Environment,
  Center,
} from "@react-three/drei";
import {
  Suspense,
  useEffect,
  useMemo,
  useRef,
} from "react";
import * as THREE from "three";

type SuitConfig = {
  jacket: { hex: string };
  lapel: { hex: string };
  buttons: { hex: string };
  pants: { hex: string };
};

type Props = {
  config: SuitConfig;
};

function SuitModel({ config }: Props) {
  const { scene } = useGLTF("/models/mens_suit.glb");

  const clonedScene = useMemo(
    () => scene.clone(true),
    [scene]
  );

  const initialized = useRef(false);

  /**
   * Clone materials ONLY ONCE
   */
  useEffect(() => {
    if (initialized.current) return;

    clonedScene.traverse((child) => {
      if (!(child instanceof THREE.Mesh))
        return;

      child.material = (
        Array.isArray(child.material)
          ? child.material[0]
          : child.material
      ).clone() as THREE.MeshStandardMaterial;

      child.castShadow = true;
      child.receiveShadow = true;
    });

    initialized.current = true;
  }, [clonedScene]);

  /**
   * Update colors on config change
   */
  useEffect(() => {
    let meshIndex = 0;

    clonedScene.traverse((child) => {
      if (!(child instanceof THREE.Mesh))
        return;

      const material =
        child.material as THREE.MeshStandardMaterial;

      const name =
        child.name.toLowerCase();

      /**
       * COLOR LOGIC
       */
      if (
        name.includes("jacket") ||
        name.includes("body") ||
        meshIndex <= 8
      ) {
        material.color.set(
          config.jacket.hex
        );
      } else if (
        name.includes("lapel") ||
        name.includes("collar") ||
        (meshIndex > 8 &&
          meshIndex <= 14)
      ) {
        material.color.set(
          config.lapel.hex
        );
      } else if (
        name.includes("button") ||
        (meshIndex > 14 &&
          meshIndex <= 18)
      ) {
        material.color.set(
          config.buttons.hex
        );
      } else {
        material.color.set(
          config.pants.hex
        );
      }

      material.roughness = 0.6;
      material.metalness = 0.2;
      material.needsUpdate = true;

      meshIndex++;
    });
  }, [clonedScene, config]);

  return (
    <Center top>
      <primitive
        object={clonedScene}
        scale={1.5}
      />
    </Center>
  );
}

export default function SuitViewer({
  config,
}: Props) {
  return (
    <div className="h-screen w-full bg-[#f6f5f2]">
      <Canvas
        shadows
        camera={{
          position: [0, 0, 8],
          fov: 35,
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={1.5} />

          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
            castShadow
          />

          <SuitModel config={config} />

          <OrbitControls
            enablePan={false}
            minDistance={2}
            maxDistance={15}
            target={[0, 0.8, 0]}
            makeDefault
          />

          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
