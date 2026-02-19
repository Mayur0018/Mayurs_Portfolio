import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import  Frameworks  from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1 lg:col-span-3">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[2] md:right-0 lg:scale-[2.5] lg:-right-[5rem]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Mayur Nishad</p>
            <p className="subtext">
              Over the last year, I've developed my frontend and backend dev
              skills to deliver dynamic software and web applications.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2 lg:col-span-3">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full min-h-[15rem]"
          >
            <p className="flex items-end text-3xl sm:text-4xl lg:text-5xl text-gray-500 opacity-50">
              CODE IS CRAFT
            </p>
            <Card
              style={{ rotate: "75deg", top: "20%", left: "15%" }}
              text="GRASP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "50%", left: "40%" }}
              text="SOLID"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "25%", left: "65%" }}
              text="Design Patterns"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "50%", left: "-5%" }}
              text="Principles"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "35%" }}
              text="SRP"
              containerRef={grid2Container}
            />
             <Card
              style={{ rotate: "30deg", top: "65%", left: "75%" }}
              image="assets/logos/react.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "65%", left: "20%" }}
              image="assets/logos/nodeimg.png"
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3 lg:col-span-3">
          <div className="z-10 w-full sm:w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in Mars, and open to remote work worldwide
            </p>
          </div>
          <figure className="absolute right-0 bottom-0 md:left-[30%] md:top-[10%] opacity-50 md:opacity-100 scale-75 md:scale-100">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4 lg:col-span-2">
          <div className="flex flex-col items-center justify-center gap-6 size-full p-4">
            <p className="text-center headtext">
              Want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5 lg:col-span-4">
          <div className="z-10 w-full sm:w-[50%]">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications.
            </p>
          </div>
          <div className="absolute inset-y-0 right-0 md:inset-y-9 w-1/2 md:w-full h-full md:start-[50%] scale-75 sm:scale-100 md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
