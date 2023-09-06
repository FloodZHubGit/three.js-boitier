import { useRef } from "react";
import { gsap } from "gsap";
import { Arduino } from "./Arduino";
import { Arriere } from "./Arriere";
import { CoteDroit } from "./Cote_droit";
import { CoteGauche } from "./Cote_gauche";
import { FaceAvant } from "./Face_avant";
import { Socle } from "./Socle";
import { Toit } from "./Toit";
import { Text3D } from "@react-three/drei";

export const Boite = () => {
  const toit = useRef();
  const arduino = useRef();

  const mouvementToit = () => {
    gsap.to(toit.current.position, {
      duration: 1.5,
      x: 84,
    });
    gsap.to(toit.current.position, {
      duration: 1.5,
      y: -25,
      delay: 1.5,
    });
  };

  const mouvementArduino = () => {
    gsap.to(arduino.current.position, {
      duration: 1.5,
      y: 25,
    });
    gsap.to(arduino.current.position, {
      duration: 1.5,
      z: -62,
      delay: 1.5,
    });
    gsap.to(arduino.current.position, {
      duration: 1.5,
      y: 0,
      delay: 3,
    });
  };

  return (
    <>
      <group
        ref={arduino}
        onClick={(e) => {
          if (
            toit.current.position.x === 84 &&
            arduino.current.position.z !== -62
          )
            mouvementArduino();
        }}
      >
        <Arduino />;
      </group>

      <Arriere />
      <Socle />
      <CoteDroit />
      <CoteGauche />
      <group
        ref={toit}
        onClick={(e) => {
          mouvementToit();
        }}
      >
        <Toit />
      </group>
      <FaceAvant />
    </>
  );
};
