/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 jar.gltf --transform 
Files: jar.gltf [32.63KB] > C:\Users\Administrator\Desktop\New folder (7)\New folder (4)\jar-transformed.glb [20.04KB] (39%)
Author: milaha (https://sketchfab.com/elenakozlova479)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/perfume-bottle-3c6c3cdb75564447a014b7f6af7f2978
Title: perfume bottle
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/jar-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Circle001_Material002_0.geometry} material={materials['Material.002']} position={[0, 0.765, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={0.787} />
      <mesh geometry={nodes.Circle001_glass_0.geometry} material={materials.glass} position={[0, 0.765, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={0.787} />
      <mesh geometry={nodes.Circle001_romb_0.geometry} material={materials.romb} position={[0, 0.765, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={0.787} />
    </group>
  )
}

useGLTF.preload('/jar-transformed.glb')
