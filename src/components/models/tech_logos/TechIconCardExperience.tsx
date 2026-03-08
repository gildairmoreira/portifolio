import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";

interface TechModel {
  name: string;
  modelPath: string;
  scale: number | [number, number, number];
  rotation: [number, number, number];
}

interface TechIconCardExperienceProps {
  model: TechModel;
}

const TechIconCardExperience: React.FC<TechIconCardExperienceProps> = ({ model }) => {
  const scene = useGLTF(model.modelPath);

  useEffect(() => {
    if (model.name === "Interactive Developer") {
      scene.scene.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          if (child.name === "Object_5") {
            (child as THREE.Mesh).material = new THREE.MeshStandardMaterial({ color: "white" });
          }
        }
      });
    }
  }, [scene, model.name]);

  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <spotLight
        position={[10, 15, 10]}
        angle={0.3}
        penumbra={1}
        intensity={2}
      />
      <Environment preset="city" />

      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group scale={model.scale} rotation={model.rotation}>
          <primitive object={scene.scene} />
        </group>
      </Float>

      <OrbitControls enableZoom={false} />
    </>
  );
};

export default TechIconCardExperience;