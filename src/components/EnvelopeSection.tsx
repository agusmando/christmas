import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const christmasUrl = "/assets/images/christmas-pngs";

const EnvelopeSection = () => {
  const ref = useRef(null);

  // Configuración del scroll
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  // Primera animación: movimiento desde la derecha hacia el centro
  const xPosition = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.3],
    ["400vw", "0vw", "0vw"]
  );
  // const opacity = useTransform(scrollYProgress, [0.25, 0.5], [0, 1]);

  // Segunda animación: rotación 3D para mostrar otra imagen
  const rotationY = useTransform(scrollYProgress, [0.3, 0.4], [0, 180]);

  // Tercera animación: movimiento hacia la parte inferior de la página
  // const yPosition = useTransform(scrollYProgress, [0.45, 1], ["50vh", "300vh"]);

  // Animación de solapa del sobre
  const rotationXClosed = useTransform(scrollYProgress, [0.5, 0.55], [0, 180]);
  const rotationXOpen = useTransform(scrollYProgress, [0.5, 0.55], [180, 0]);

  // Añadimos suavidad a las transiciones
  const smoothX = useSpring(xPosition, { stiffness: 100, damping: 20 });
  // const smoothY = useSpring(yPosition, { stiffness: 100, damping: 20 });
  const smoothEnvelopeRotation = useSpring(rotationY, {
    stiffness: 100,
    damping: 20,
  });
  const smoothLidRotationClosed = useSpring(rotationXClosed, {
    stiffness: 100,
    damping: 20,
  });
  const smootLidRotationOpen = useSpring(rotationXOpen, {
    stiffness: 100,
    damping: 20,
  });

  return (
    <div
      ref={ref}
      style={{
        height: "300vh",
        backgroundColor: "#F2DBBF",
        backgroundImage: `url(${christmasUrl}/BG_envelope.png)`,
        backgroundAttachment: "fixed",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
      }}
      className="relative w-full"
    >
      <motion.div
        style={{
          position: "fixed",
          top: "30%",
          left: "10%",
          x: smoothX,
          // y: smoothY,
          rotateY: smoothEnvelopeRotation,
          // opacity,
          width: "330px",
          height: "210px",
          backgroundImage: `url('${christmasUrl}/envelope-back.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transformStyle: "preserve-3d",
          zIndex: 10000,
        }}
      >
        {/* La segunda imagen al rotar */}
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            backgroundImage: `url('${christmasUrl}/envelope-front.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            rotateY: 180,
            zIndex: 10000,
          }}
        >
          {/* La solapa cerrada del sobre */}
          <motion.div
            style={{
              position: "absolute",
              top: "0px",
              left: "-5px",
              width: "340px",
              height: "67px",
              // backfaceVisibility: "hidden",
              rotateX: smoothLidRotationClosed,
              backgroundImage: `url('${christmasUrl}/closed-envelope-lid.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transformOrigin: "top", // Ajusta el eje de rotación
              zIndex: 10001,
            }}
          >
            {/* La solapa abierta del sobre */}
            <motion.div
              style={{
                position: "absolute",
                top: "0px",
                left: "5px",
                width: "330px",
                height: "67px",
                backfaceVisibility: "hidden",

                rotateX: smootLidRotationOpen,
                backgroundImage: `url('${christmasUrl}/open-envelope-lid.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transformOrigin: "top", // Ajusta el eje de rotación
                zIndex: 10001,
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EnvelopeSection;
