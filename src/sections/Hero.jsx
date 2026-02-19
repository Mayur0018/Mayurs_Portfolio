import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText.jsx"
import ParallaxBackground from "../Components/ParallaxBackground.jsx";
import { Astronaut } from "../components/Astronaut";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense } from "react";
import Loader from "../components/Loader";

const Hero = () => {
  const isSmallMobile = useMediaQuery({ maxWidth: 480 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });

  const astronautScale = isSmallMobile ? 0.2 : isMobile ? 0.23 : isTablet ? 0.25 : 0.3;
  const astronautPosition = isMobile ? [0, -1.5, 0] : isTablet ? [0.5, -1, 0] : [1, -1, 0];

  return (
    <section className="relative flex flex-col md:flex-row items-center md:items-start justify-center min-h-screen overflow-hidden c-space pt-32 md:pt-0">
      <HeroText />
      <ParallaxBackground />
      <figure
        className="absolute inset-0 -z-10"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 1, 3] }}>
          <Suspense fallback={<Loader />}>
            <Float>
              <Astronaut
                scale={astronautScale}
                position={astronautPosition}
              />
            </Float>
            <Rig />
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

export default Hero;
