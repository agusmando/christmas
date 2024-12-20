import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const EnvelopeSection = () => {
  const containerRef = useRef(null);

  // Progreso del scroll dentro del contenedor
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Transformaciones para el sobre
  const envelopeY = useTransform(scrollYProgress, [0, 0.5], [0, 100]); // Desplazamiento hacia abajo
  const envelopeRotateX = useTransform(scrollYProgress, [0, 0.5], [0, 180]); // Rotación del sobre

  // Transformaciones para la carta
  const letterY = useTransform(scrollYProgress, [0.5, 1], [0, -150]); // Desplazamiento hacia arriba
  const letterOpacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]); // Opacidad de la carta

  return (
    <div
      ref={containerRef}
      className="h-[200vh] relative flex justify-center items-start pt-[30vh]"
    >
      <div className="relative w-40 h-40 flex flex-col items-center">
        {/* Sobre */}
        <motion.div
          className="w-32 h-24 bg-red-500 relative origin-top"
          style={{
            y: envelopeY,
            rotateX: envelopeRotateX,
          }}
        >
          {/* Parte superior del sobre */}
          <div className="absolute top-0 left-0 w-32 h-12 bg-red-600" />
        </motion.div>

        {/* Carta */}
        <motion.div
          className="w-28 h-36 bg-yellow-300 absolute top-12"
          style={{
            y: letterY,
            opacity: letterOpacity,
          }}
        />
      </div>
    </div>
  );
};

export default EnvelopeSection;
