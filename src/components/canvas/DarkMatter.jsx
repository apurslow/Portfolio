import { Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Preload, useAnimations, useGLTF,  } from "@react-three/drei"



import CanvasLoader from '../Loader'

const actionNames = ['Take 001']

const DarkMatter = () => {
  const darkmatter = useGLTF("./cloud_station/scene.gltf")
  const darkanimations = useAnimations(darkmatter.animations, darkmatter.scene)
  useFrame(() => (
    actionNames.forEach((actionName) => {
      const action = darkanimations.actions[actionName];
      action.play();
    })

  ))


  return (
    <mesh>
      <primitive object={darkmatter.scene} scale={1.5} position-y={-2.5} rotation-y={0}  />
    </mesh>

  )
}


const DarkMatterCanvas = () => {
  return (
    <Canvas
      className="w-full h-full"
      shadows
      frameloop="always"
      camera={{
        position: [0, -2, 8],
        fov: 60,
        near: 0.1,
        far: 200
      }}
      gl={{ preserveDrawingBuffer: true }}

    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enablePan={false} enableZoom={false} enableRotate />
        <DarkMatter />
        <Preload all />
      </Suspense>
    </Canvas>
  )
}

export default DarkMatterCanvas;