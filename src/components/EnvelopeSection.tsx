import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import { useRef, useState } from "react";

const christmasUrl = "/assets/images/christmas-pngs";

const EnvelopeSection = () => {
  const ref = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  // Configuración del scroll
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.47) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  });

  // Primera animación: movimiento desde la derecha hacia el centro
  const xPosition = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.3],
    ["400vw", "0vw", "0vw"]
  );
  const yPosition = useTransform(
    scrollYProgress,
    [0.6, 0.7, 0.8, 1],
    ["0vh", "300vh", "300vh", "-600vh"]
  );
  const letterOutYPosition = useTransform(
    scrollYProgress,
    [0.6, 0.7, 0.8],
    ["0vh", "-300vh", "-300vh"]
  );
  // Segunda animación: rotación 3D para mostrar otra imagen
  const rotationY = useTransform(scrollYProgress, [0.3, 0.4], [0, 180]);

  // Tercera animación: movimiento hacia la parte inferior de la página
  // const yPosition = useTransform(scrollYProgress, [0.45, 1], ["50vh", "300vh"]);

  // Animación de solapa del sobre
  const rotationXClosed = useTransform(scrollYProgress, [0.45, 0.47], [0, 180]);
  const rotationXOpen = useTransform(scrollYProgress, [0.45, 0.47], [180, 0]);

  // Añadimos suavidad a las transiciones
  const smoothX = useSpring(xPosition, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(yPosition, { stiffness: 100, damping: 20 });
  const smoothEnvelopeRotation = useSpring(rotationY, {
    stiffness: 100,
    damping: 20,
  });
  const smoothLidRotationClosed = useSpring(rotationXClosed, {
    stiffness: 100,
    damping: 20,
  });
  const smoothLidRotationOpen = useSpring(rotationXOpen, {
    stiffness: 100,
    damping: 20,
  });
  const smoothLetterOutYPosition = useSpring(letterOutYPosition, {
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
      className=" w-full"
    >
      <motion.div
        style={{
          position: "fixed",
          top: "30%",
          left: "7.5%",
          x: smoothX,
          y: smoothY,
          rotateY: smoothEnvelopeRotation,
          width: "350px",
          height: "225px",
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
            width: "350px",
            height: "225px",
            inset: 0,
            backfaceVisibility: "hidden",
            backgroundImage: `url('${christmasUrl}/envelope-front.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            rotateY: 180,
            transformStyle: "preserve-3d",
            zIndex: 10000,
          }}
        >
          {/* Carta */}
          <motion.div
            style={{
              zIndex: 9990,
              position: "absolute",
              top: "0px",
              left: "10px",
              y: smoothLetterOutYPosition,
              width: "330px",
              height: "215px",
              translateZ: "-1px",
              backfaceVisibility: "hidden",
              backgroundImage: `url('${christmasUrl}/Paper.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          {/* La solapa cerrada del sobre */}
          <motion.div
            style={{
              position: "absolute",
              top: "0px",
              left: "-5px",
              width: "360px",
              height: "73px",
              // backfaceVisibility: "hidden",
              // transformStyle: "preserve-3d",
              rotateX: smoothLidRotationClosed,
              backgroundImage: `url('${christmasUrl}/closed-envelope-lid.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transformOrigin: "top", // Ajusta el eje de rotación
              translateZ: isOpen ? "-1px" : "1px",
              zIndex: isOpen ? 9980 : 10001,
            }}
          >
            {/* La solapa abierta del sobre */}
            <motion.div
              style={{
                position: "absolute",
                top: "0px",
                left: "5px",
                width: "350px",
                height: "73px",
                backfaceVisibility: "hidden",
                rotateX: smoothLidRotationOpen,
                backgroundImage: `url('${christmasUrl}/open-envelope-lid.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transformOrigin: "top", // Ajusta el eje de rotación
                zIndex: isOpen ? 9980 : 10001,
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EnvelopeSection;
