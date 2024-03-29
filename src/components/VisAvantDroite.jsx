/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 .\\public\\visAvantDroite.glb 
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function VisAvantDroite(props) {
  const { nodes, materials } = useGLTF("/visAvantDroite.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Mesh_Mesh_head_geo001_lambert2SG001.geometry}
        material={materials["lambert2SG.001"]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/visAvantDroite.glb");
