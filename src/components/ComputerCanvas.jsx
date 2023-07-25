import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
// import CanvaLoader from '../Loader'
import { Box } from '@mui/material';


const Computer = () => {

    const computer = useGLTF('./desktop_pc/scene.gltf');

    return (
        <mesh >
            <hemisphereLight

                intensity={0.15}
                groundColor="black"
            />
            <pointLight intensity={1} />

            <primitive object={computer.scene} scale={0.75} position={[0, 0, -1.5]} rotation={[-0.01,-0.2,-0.1]} />
        </mesh>
    )
}


function ComputerCanvas() {
    return (
        <Canvas
            frameloop='demand'
            shadows
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
          

        >

            <Suspense />
            <OrbitControls

                enableZoom={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}

            />
            <Computer />
            <Suspense />
        </Canvas>
    )
}

export default ComputerCanvas