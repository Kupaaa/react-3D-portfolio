import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import Mac from './3D/Mac';
import styled from 'styled-components';

// const Desc = styled.div`
// width: 200px;
// height: 70px;
// padding: 20px;
// background-color: white;
// border-radius: 10px;
// position: absolute;
// top: 100px;
// right: 100px`

export const WebDesign = () => {
  return (
    <>
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <Mac/>
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
    {/* <Desc>
      test 
    </Desc> */}
    </>
  );
};

export default WebDesign;
