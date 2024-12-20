import { Engine, ZIndex } from "tsparticles-engine";
import { motion } from "framer-motion";
import { useCallback, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const christmasUrl = "/src/assets/images/christmas-pngs/";
const HeroSection = () => {
  const swayAnimation = {
    rotate: [-8, 8, -8],
    transition: {
      duration: 2.4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const [count, setCount] = useState(50);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine); // Carga completa del motor de tsparticles
  }, []);

  return (
    // bg-gradient-to-r from-[#2f5323] to-[#3a8232]
    <div
      className=" h-[100vh] w-full flex-col flex items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: "#2D4031", transformOrigin: "top center" }}
    >
      <Particles
        id="tsparticles"
        style={{ zIndex: 1000, position: "relative" }}
        init={particlesInit}
        options={{
          fullScreen: {
            enable: false, // Evita que ocupe toda la pantalla si está dentro de un div específico
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
      <div className="relative flex flex-col w-full justify-center items-center">
        <h1
          style={{
            fontFamily: "Laurelle",
            fontSize: "52px",
            fontWeight: 500,
            color: "#fff",
            zIndex: 10001,
            transform: "translateY(40px)",
          }}
        >
          Feliz
        </h1>

        <h2
          style={{
            fontFamily: "Bebas",
            fontWeight: 500,
            fontSize: "96px",
            color: "#FAB01B",
            position: "relative",
            zIndex: 10000,
          }}
        >
          Navidad
        </h2>
        <img
          src={christmasUrl + "/decoration5.webp"}
          alt="Title enhancer"
          style={{ width: "215px", transform: "translateY(-40px)" }}
        />
      </div>
      {/* top images */}
      <img
        className="absolute top-1 w-full z-10"
        style={{
          transform: " translateY(30px)",
        }}
        src={christmasUrl + "/lights2.webp"}
        alt="Lights"
      />
      {/* Bauble 1 */}
      <motion.div
        className="absolute top-0 right-1"
        animate={{
          ...swayAnimation,
          transition: { ...swayAnimation.transition, delay: 0.2 },
        }}
        style={{ transformOrigin: "-90px 0" }}
      >
        {/* Rope */}
        <div
          className="absolute h-[182px] w-[1px] bg-white"
          style={{ transform: "translate(-86px, 0px)" }}
        />

        {/* Bauble */}
        <img
          style={{
            transform: "translate(-110px,175px) rotate(34deg)",
            width: "50px",
          }}
          src={christmasUrl + "/bauble1.webp"}
          alt="Christmas bauble"
        />
      </motion.div>
      {/* Bauble 2 */}
      <motion.div
        className="absolute top-0 right-1"
        animate={swayAnimation}
        style={{ transformOrigin: "15px 0" }}
      >
        {/* Rope */}
        <div
          className="absolute h-[182px] w-[1px] bg-white"
          style={{ transform: "translate(20px, 0px)", width: "1px" }}
        />

        {/* Bauble */}
        <img
          style={{
            transform: "translate(-25px,115px)",
            width: "96px",
          }}
          src={christmasUrl + "/bauble2.webp"}
          alt="Christmas bauble"
        />
      </motion.div>
      {/* bottom images */}
      <img
        className="absolute bottom-0 left-1"
        style={{
          width: "210px",
          transform: "rotate(25deg) translateX(-56px)",
        }}
        src={christmasUrl + "/present2.webp"}
        alt="Present"
      />
      <img
        className="absolute bottom-1 right-1"
        style={{
          width: "110px",
          transform: " translate(0, -5px) ",
        }}
        src={christmasUrl + "/snowBubble.webp"}
        alt="Snow bubble"
      />
      <img
        className="absolute bottom-0 left-1"
        style={{
          width: "170px",
          transform: " translate(80px, -10px)",
        }}
        src={christmasUrl + "/present6.webp"}
        alt="Present"
      />
      <img
        className="absolute bottom-1 right-1"
        style={{
          width: "95px",
          transform: " translate(-80px, -10px) rotate(13deg)",
        }}
        src={christmasUrl + "/candy5.webp"}
        alt="Candy"
      />
    </div>
  );
};

export default HeroSection;
