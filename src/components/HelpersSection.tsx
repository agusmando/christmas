import { useScroll, useSpring, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const christmasUrl = "/assets/images/christmas-pngs";

const HelpersSection = () => {
  const ref = useRef(null);

  // Configuración del scroll
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const yPosition = useTransform(
    scrollYProgress,
    [0.5, 0.1, 0.15, 0.2],
    ["200vh", "0vh", "0vh", "-400vh"]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0.5, 0.1, 0.15, 0.2],
    [0, 1, 1, 0]
  );

  const indiaYPosition = useTransform(
    scrollYProgress,
    [0.25, 0.35],
    ["200vh", "0vh"]
  );
  const indiaOpacity = useTransform(scrollYProgress, [0.25, 0.35], [0, 1]);

  const tobyYPosition = useTransform(
    scrollYProgress,
    [0.45, 0.55],
    ["200vh", "0vh"]
  );
  const tobyOpacity = useTransform(scrollYProgress, [0.45, 0.55], [0, 1]);

  const miniYPosition = useTransform(
    scrollYProgress,
    [0.65, 0.75],
    ["200vh", "0vh"]
  );
  const miniOpacity = useTransform(scrollYProgress, [0.65, 0.75], [0, 1]);

  const smoothY = useSpring(yPosition, { stiffness: 100, damping: 20 });
  const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 20 });
  const smoothIndiaY = useSpring(indiaYPosition, {
    stiffness: 100,
    damping: 20,
  });
  const smoothIndiaOpacity = useSpring(indiaOpacity, {
    stiffness: 100,
    damping: 20,
  });
  const smoothTobyY = useSpring(tobyYPosition, {
    stiffness: 100,
    damping: 20,
  });
  const smoothTobyOpacity = useSpring(tobyOpacity, {
    stiffness: 100,
    damping: 20,
  });
  const smoothMiniY = useSpring(miniYPosition, {
    stiffness: 100,
    damping: 20,
  });
  const smoothMiniOpacity = useSpring(miniOpacity, {
    stiffness: 100,
    damping: 20,
  });
  return (
    <div
      ref={ref}
      style={{
        height: "500vh",
        textAlign: "center",
        backgroundColor: "#DB2626",
        backgroundImage: `url(${christmasUrl}/BG_helpers.png)`,
        backgroundAttachment: "fixed",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
      }}
      className="relative w-full "
    >
      <motion.div
        className="flex  items-center justify-center w-full"
        style={{
          position: "fixed",
          y: smoothY,
          zIndex: 10000,
          opacity: smoothOpacity,
          top: "40%",
        }}
      >
        <p
          style={{ fontFamily: "Laurelle", color: "#FAB01B", fontSize: "36px" }}
        >
          También quieren saludarte...
        </p>
      </motion.div>
      <motion.div
        style={{
          zIndex: 10000,
          position: "fixed",
          top: "15%",
          right: "40px",
          y: smoothIndiaY,
          opacity: smoothIndiaOpacity,
          width: "168px",
          height: "198px",
          backgroundImage: `url('${christmasUrl}/India.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <motion.div
        style={{
          zIndex: 10000,
          position: "fixed",
          top: "36%",
          left: "40px",
          y: smoothTobyY,
          opacity: smoothTobyOpacity,
          width: "169px",
          height: "230px",
          backgroundImage: `url('${christmasUrl}/Toby.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <motion.div
        style={{
          zIndex: 10000,
          position: "fixed",
          top: "63%",
          right: "40px",
          y: smoothMiniY,
          opacity: smoothMiniOpacity,
          width: "170px",
          height: "202px",
          backgroundImage: `url('${christmasUrl}/Mini.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </div>
  );
};

export default HelpersSection;
