import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader/';


const Computers = ({ isMobile }) => {
  const computer = useGLTF('/desktop_pc/scene.gltf');


  return (
    <mesh>
      <hemisphereLight intensity={0.5} groundColor={"black"} />
      <pointLight intensity={1} />
      <directionalLight position={[5, 10, 0]} intensity={1} />
      <spotLight position={[-20, 50, 10]} intensity={0.8} angle={0.12} penumbra={1} castShadow shadow-mapsize={1024} />
      <primitive object={computer.scene} scale={isMobile ? 0.5 : 0.75} position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]} rotation={[-0.01, -0.2, -0.1]} />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    //add a listener for changes to screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    //Set the initial valuye of the 'isMobile' state variable
    setIsMobile(mediaQuery.matches);
    
    //Define a callback function to handle changes to the meidaQuery
    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    }
    //Add the callback function as a listener for the changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    //Remove the listener when the component unmounts
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    }
  }, [])

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas