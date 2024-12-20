// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import EnvelopeSection from "./components/EnvelopeSection";
import HeroSection from "./components/HeroSection";
// import { SmoothScrollLenis } from "./components/SmoothScrollLenis";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <SmoothScrollLenis /> */}
      <HeroSection />
      <EnvelopeSection />
    </>
  );
}

export default App;
