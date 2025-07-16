import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import { Box, Sphere } from '@react-three/drei';

function VRScene() {
  return (
    <group>
      <Box args={[1, 1, 1]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#4f46e5" />
      </Box>
      <Sphere args={[0.5, 32, 32]} position={[2, 0, 0]}>
        <meshStandardMaterial color="#818cf8" />
      </Sphere>
    </group>
  );
}


export default function XRAnimation() {
  return (
    <div className="h-[500px] w-full relative bg-gray-900/50 rounded-xl overflow-hidden">
      <Canvas
        camera={{ position: [0, 2, 5] }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <group>
            <VRScene />
          </group>
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.5}
          />
        </Suspense>
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
        <h3 className="text-xl font-bold text-white mb-2">
          Explorez l'Avenir du Digital
        </h3>
        <p className="text-gray-300">
          Des expériences immersives qui transforment votre vision
        </p>
      </div>
    </div>
  );
}