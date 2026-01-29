// src/components/frameworks.jsx
import { OrbitingCircles } from "../Components/OrbitingCircles"; // or "../OrbitingCircles" if no @ alias

const skills = [
  "auth0",
  "css3",
  "git",
  "html5",
  "node",
  "mongodb",
  "javascript",
  "microsoft",
  "react",
  "sqlite",
  "tailwindcss",
  "vitejs",
  "wordpress",
];

export default function Frameworks() {
  return (
    <div className="relative flex h-[320px] w-full flex-col items-center justify-center overflow-hidden md:h-[400px]">
      {/* Background subtle gradient (optional but looks nice) */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5" />

      {/* Outer orbit - larger icons, slower */}
      <OrbitingCircles
        className="animate-spin-slow"
        iconSize={40}
        radius={140}
        duration={30}
        reverse={false}
      >
        {skills.map((skill, index) => (
          <Icon key={`outer-${skill}-${index}`} src={`/assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>

      {/* Inner orbit - smaller icons, faster, reverse direction */}
      <OrbitingCircles
        className="animate-spin-fast"
        iconSize={28}
        radius={90}
        duration={20}
        reverse={true}
      >
        {[...skills].reverse().map((skill, index) => (
          <Icon key={`inner-${skill}-${index}`} src={`/assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>

      {/* Optional center text or logo */}
      <div className="pointer-events-none absolute z-10 flex flex-col items-center justify-center text-center">
        <h3 className="text-xl font-semibold tracking-wide text-white/90 md:text-2xl">
          Tech Stack
        </h3>
        <p className="mt-1 text-sm text-white/60">Always learning & building</p>
      </div>
    </div>
  );
}

function Icon({ src }) {
  return (
    <div className="group relative flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:rotate-12">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <img
        src={src}
        alt=""
        className="h-10 w-10 object-contain drop-shadow-md"
        loading="lazy"
      />
    </div>
  );
}