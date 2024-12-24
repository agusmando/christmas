// Loader.jsx

import { motion } from "framer-motion";

const christmasUrl = "/assets/images/christmas-pngs";

const Loader = () => {
  const swayAnimation = {
    rotate: [0, 360],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#F2DBBF",
      }}
    >
      <motion.div
        style={{
          width: "70px",
          height: "70px",
        }}
        animate={{
          ...swayAnimation,
          transition: { ...swayAnimation.transition, delay: 0.2 },
        }}
      >
        <img src={christmasUrl + "/decoration4.webp"} alt="" />
      </motion.div>
      <p
        style={{
          fontFamily: "Laurelle",
          fontSize: "32px",
          color: "#BA9E63",
          marginTop: "20px",
        }}
      >
        Cargando...
      </p>
    </div>
  );
};

export default Loader;
