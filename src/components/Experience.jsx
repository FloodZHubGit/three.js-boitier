import { OrbitControls } from "@react-three/drei";
import { Boite } from "./Boite";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <ambientLight />
      <directionalLight position={[0, 100, 0]} castShadow />
      <group
        scale={[0.08, 0.08, 0.08]}
        rotation={[0, Math.PI, 0]}
        position={[0, 0, -2]}
      >
        <Boite />
      </group>
    </>
  );
};
