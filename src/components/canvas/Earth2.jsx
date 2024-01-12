import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"


import CanvasLoader from '../Loader'

const Earth2 = () => {
  const earth = useGLTF('./a_windy_day/scene.gltf')

  return (
    <primitive object={earth.scene} scale={2} position-y={0} rotation-y={0} />
  )
}

const EarthCanvas2 = () => {
  return (
    <Canvas
      className="w-full h-full"
      shadows
      frameloop="demand"
      camera={{
        position: [-4, 3, 6],
        fov: 45,
        near: 0.1,
        far: 200
      }}
      gl={{ preserveDrawingBuffer: true }}

    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enablePan={false} enableZoom={false} autoRotate maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Earth2 />
        <Preload all />
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas2;