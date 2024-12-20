import React, { useRef } from "react";
import { TbChristmasTreeFilled } from "react-icons/tb";
import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

export const SmoothScrollLenis = () => {
  return (
    <div className="bg-zinc-950">
      <Nav />
      <Hero />
      <div className="h-screen"></div>
    </div>
  );
};

const Nav = () => {
  return (
    <nav className="fixed left-0 right-0 top-0  z-50 flex items-center justify-between px-6 py-3">
      <TbChristmasTreeFilled className="text-3xl text-zinc-400" />
      <button
        onClick={() => {
          document.getElementById("second-view")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        className="flex items-center gap-1 text-xs text-zinc-400"
      >
        Segunda vista
      </button>
    </nav>
  );
};

const SECTION_HEIGHT = 1500;

const Hero = () => {
  return (
    <div
      className="relative w-full "
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {}}
      />
      <CenterImage />
      <ParallaxImages />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950"></div>
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT],
    ["20%", "50%"]
  );

  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        clipPath,
        opacity,
        backgroundSize,
        backgroundImage: "url(src/assets/images/india.png)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto relative z-10 max-w-5xl px-4 pt-[200px]">
      <ParallaxImg
        src="/src/assets/images/toby.png"
        alt="Toby"
        start={200}
        end={-250}
        className="w-1/3"
      />
      <ParallaxImg
        src="/src/assets/images/Toby 2.png"
        alt="Toby 2"
        start={-200}
        end={250}
        className="mx-auto w-2/3"
      />
    </div>
  );
};

const ParallaxImg = ({
  className,
  alt,
  src,
  start,
  end,
}: {
  className?: string;
  alt: string;
  src: string;
  start: number;
  end: number;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;
  return (
    <motion.img
      style={{ opacity, transform }}
      ref={ref}
      src={src}
      alt={alt}
      className={className}
    />
  );
};
