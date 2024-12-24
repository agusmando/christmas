import { Particles } from "react-tsparticles";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";

import "./App.css";
import EnvelopeSection from "./components/EnvelopeSection";
import HeroSection from "./components/HeroSection";
import HelpersSection from "./components/HelpersSection";

function App() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine); // Carga completa del motor de tsparticles
  }, []);

  return (
    <>
      {/* <SmoothScrollLenis /> */}
      <Particles
        id="tsparticles"
        style={{ zIndex: 1000, position: "relative" }}
        init={particlesInit}
        options={{
          fullScreen: {
            enable: true, // Evita que ocupe toda la pantalla si está dentro de un div específico
            zIndex: 1000,
          },
          particles: {
            color: {
              value: "#fff",
            },
            number: {
              value: 100, // Número de copos de nieve
            },
            opacity: {
              value: { min: 0.3, max: 1 },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 4 },
            },
            move: {
              direction: "bottom",
              enable: true,
              speed: { min: 1, max: 3 },
              straight: false, // Hace que los copos caigan con movimientos más realistas
            },
          },
          background: {
            color: "transparent", // Color de fondo
          },
        }}
        className="absolute  top-0 left-0 w-full h-full"
      />
      <HeroSection />
      <EnvelopeSection />
      <HelpersSection />
    </>
  );
}

export default App;
