import { Environment, Float, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

interface TechModel {
  name: string;
  modelPath: string;
  scale: number | [number, number, number];
  rotation: [number, number, number];
}

interface TechIconCardExperienceProps {
  model: TechModel;
  // Índice do card para calcular offset de fase e garantir rotação independente
  cardIndex?: number;
}

const TechIconCardExperience: React.FC<TechIconCardExperienceProps> = ({
  model,
  cardIndex = 0,
}) => {
  const scene = useGLTF(model.modelPath);
  // Ref do group 3D para animação por frame
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    // Corrige material do modelo "Interactive Developer"
    if (model.name === "Interactive Developer") {
      scene.scene.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          if (child.name === "Object_5") {
            (child as THREE.Mesh).material = new THREE.MeshStandardMaterial({
              color: "white",
            });
          }
        }
      });
    }
  }, [scene, model.name]);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;

    // Offset de fase único por card: cada ícone parte de um ponto diferente do ciclo
    // Isso garante que nenhum ícone fica sincronizado com outro
    const phaseOffset = cardIndex * 1.37; // Número irracional para evitar padrões repetitivos
    const t = clock.getElapsedTime() + phaseOffset;

    // Rotação suave no eixo Y (esquerda/direita) e leve em X (cima/baixo)
    groupRef.current.rotation.y = Math.sin(t * 0.55) * 0.7;
    groupRef.current.rotation.x = Math.sin(t * 0.35 + 1.1) * 0.25;
  });

  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <spotLight position={[10, 15, 10]} angle={0.3} penumbra={1} intensity={2} />
      <Environment preset="city" />

      {/* Float com velocidade levemente diferente por cardIndex para mais naturalidade */}
      <Float
        speed={4 + (cardIndex % 3) * 0.8}
        rotationIntensity={0}
        floatIntensity={0.6 + (cardIndex % 4) * 0.1}
      >
        <group ref={groupRef} scale={model.scale} rotation={model.rotation}>
          <primitive object={scene.scene} />
        </group>
      </Float>
    </>
  );
};

export default TechIconCardExperience;