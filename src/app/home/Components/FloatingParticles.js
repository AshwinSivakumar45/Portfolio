"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const FloatingParticles = ({ colors }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fpsLimit: 120,
        fullScreen: { enable: false, zIndex: 0 },
        particles: {
          color: { value: colors.primary },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            speed: 0.5,
            trail: {
              enable: true,
              length: 10,
              fillColor: colors.primary,
            },
          },
          number: { density: { enable: true, area: 800 }, value: 60 },
          opacity: { value: { min: 0.1, max: 0.5 } },
          shape: { type: ["circle", "triangle"] },
          size: { value: { min: 1, max: 4 } },
          wobble: { enable: true, distance: 5, speed: 3 },
        },
        detectRetina: true,
      }}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
};

export default FloatingParticles;
