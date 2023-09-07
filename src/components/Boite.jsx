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
import { VisArriereDroit } from "./VisArriereDroit";
import { VisArriereGauche } from "./VisArriereGauche";
import { VisAvantDroite } from "./VisAvantDroite";
import { VisAvantGauche } from "./VisAvantGauche";

export const Boite = () => {
  const toit = useRef();
  const arduino = useRef();
  const visArriereDroit = useRef();
  const visArriereGauche = useRef();
  const visAvantDroite = useRef();
  const visAvantGauche = useRef();

  const mouvementToit = () => {
    if (toit.current.position.x === 0) {
      gsap.to(toit.current.position, {
        duration: 1,
        y: 10,
      });
      gsap.to(toit.current.position, {
        duration: 1.5,
        x: 84,
        delay: 0.5,
      });
      gsap.to(toit.current.position, {
        duration: 1.5,
        y: -25,
        delay: 2,
      });
    }
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
            arduino.current.position.z !== -62 &&
            visArriereDroit.current.position.y === 40 &&
            visArriereGauche.current.position.y === 40 &&
            visAvantDroite.current.position.y === 40 &&
            visAvantGauche.current.position.y === 40
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
      <group
        ref={visArriereDroit}
        onClick={(e) => {
          if (toit.current.position.x === 84)
            gsap.to(visArriereDroit.current.position, {
              duration: 1,
              y: 40,
            });
        }}
      >
        <VisArriereDroit />
      </group>
      <group
        ref={visArriereGauche}
        onClick={(e) => {
          if (toit.current.position.x === 84)
            gsap.to(visArriereGauche.current.position, {
              duration: 1,
              y: 40,
            });
        }}
      >
        <VisArriereGauche />
      </group>
      <group
        ref={visAvantDroite}
        onClick={(e) => {
          if (toit.current.position.x === 84)
            gsap.to(visAvantDroite.current.position, {
              duration: 1,
              y: 40,
            });
        }}
      >
        <VisAvantDroite />
      </group>
      <group
        ref={visAvantGauche}
        onClick={(e) => {
          if (toit.current.position.x === 84)
            gsap.to(visAvantGauche.current.position, {
              duration: 1,
              y: 40,
            });
        }}
      >
        <VisAvantGauche />
      </group>
    </>
  );
};
