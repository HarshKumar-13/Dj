"use client";

import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  useGLTF,
  Center,
} from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

type ColorType = {
  name: string;
  hex: string;
};

type ConfigType = {
  material: string;
  size: string;
  burnishing: boolean;
  finish?: string;
  price: number;
  colors: {
    upper: ColorType;
    toe: ColorType;
    laces: ColorType;
    sole: ColorType;
  };
};

function ShoeModel({
  config,
}: {
  config: ConfigType;
}) {
  const { scene } = useGLTF("/models/Shoe.glb");

  const shoe = useMemo(
    () => scene.clone(true),
    [scene]
  );

  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;

    shoe.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) return;

      child.material = (
        child.material as THREE.MeshStandardMaterial
      ).clone();

      child.castShadow = true;
      child.receiveShadow = true;
    });

    initialized.current = true;
  }, [shoe]);

  useEffect(() => {
    shoe.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) return;

      const material =
        child.material as THREE.MeshStandardMaterial;

      const name = child.name;

      /**
       * SOLE
       */
      if (
        name.startsWith("Cube") ||
        name === "Plane025"
      ) {
        material.map = null;
        material.normalMap = null;
        material.roughnessMap = null;
        material.metalnessMap = null;

        material.color.set(
          config.colors.sole.hex
        );

        material.roughness = 0.6;
        material.metalness = 0.02;
      }

      /**
       * LACES
       */
      else if (
        name.startsWith("BézierCurve") ||
        name.startsWith("BezierCurve")
      ) {
        material.map = null;

        material.color.set(
          config.colors.laces.hex
        );

        material.roughness = 0.5;
      }

      /**
       * TOE
       */
      else if (name === "Plane013") {
        material.color.set(
          config.colors.toe.hex
        );

        material.roughness = 0.45;
        material.metalness = 0.03;
      }

      /**
       * UPPER
       * IMPORTANT: exclude Plane025
       */
      else if (
        name.startsWith("Plane") &&
        name !== "Plane025" &&
        name !== "Plane013"
      ) {
        material.color.set(
          config.colors.upper.hex
        );

        switch (config.material) {
          case "Suede":
            material.roughness = 0.85;
            material.metalness = 0.02;
            break;

          case "Painted Full Grain":
            material.roughness = 0.15;
            material.metalness = 0.08;
            break;

          case "Luxe Calf":
            material.roughness = 0.45;
            material.metalness = 0.03;
            break;

          default:
            material.roughness = 0.35;
            material.metalness = 0.04;
        }
      }

      material.needsUpdate = true;
    });
  }, [config, shoe]);

  return (
    <Center>
      <primitive
        object={shoe}
        scale={2.8}
      />
    </Center>
  );
}

export default function ShoeViewer({
  config,
}: {
  config: ConfigType;
}) {
  return (
    <div className="w-full h-full">
      <Canvas
        shadows
        camera={{
          position: [0, 0, 5],
          fov: 35,
        }}
      >
        <ambientLight intensity={1.6} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={3}
          castShadow
        />

        <directionalLight
          position={[-4, 2, 3]}
          intensity={1.2}
        />

        <ShoeModel config={config} />

        <OrbitControls
          enableZoom
          minDistance={1.5}
          maxDistance={15}
          zoomSpeed={1.2}
          enablePan={false}
        />

        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
