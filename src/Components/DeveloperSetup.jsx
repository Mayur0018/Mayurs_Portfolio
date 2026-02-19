import { useGLTF, Float, PresentationControls, Html, ContactShadows } from "@react-three/drei";
import { Suspense } from "react";

const LaptopModel = () => {
  const laptop = useGLTF("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf");
  
  return (
    <primitive object={laptop.scene} position-y={-1.2} rotation-x={0.13}>
        <Html
            transform
            wrapperClass="htmlScreen"
            distanceFactor={1.17}
            position={[0, 1.56, -1.4]}
            rotation-x={-0.256}
        >
            <iframe src="https://bruno-simon.com/html/" className="w-[1024px] h-[670px] border-none rounded-[20px] bg-black" />
        </Html>
    </primitive>
  );
};

export const DeveloperSetup = ({ scale = 1, position = [0, 0, 0] }) => {
  return (
    <PresentationControls
      global
      rotation={[0.13, 0.1, 0]}
      polar={[-0.4, 0.2]}
      azimuth={[-1, 0.75]}
      config={{ mass: 2, tension: 400 }}
      snap={{ mass: 4, tension: 400 }}
    >
      <Float rotationIntensity={0.4}>
        <rectAreaLight
          width={2.5}
          height={1.65}
          intensity={65}
          color={"#ff6900"}
          rotation={[-0.1, Math.PI, 0]}
          position={[0, 0.55, -1.15]}
        />
        <Suspense fallback={null}>
            <group scale={scale} position={position}>
                <LaptopModel />
            </group>
        </Suspense>
        <ContactShadows
            position-y={-1.4}
            opacity={0.4}
            scale={5}
            blur={2.4}
        />
      </Float>
    </PresentationControls>
  );
};

useGLTF.preload("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf");
