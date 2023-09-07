import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { useControls, button } from "leva";

function App() {
  return (
    <Canvas shadows={true} camera={{ position: [8, 8, 8], fov: 50 }}>
      <color attach="background" args={["#bacede"]} />
      <Experience />
    </Canvas>
  );
}

export default App;
