import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "./app.css";

function App() {
  const [liczbak1, setLiczbak1] = useState(null);
  const [liczbak2, setLiczbak2] = useState(null);
  const [liczbak3, setLiczbak3] = useState(null);
  const [liczbao1, setLiczbao1] = useState(null);
  const [liczbao2, setLiczbao2] = useState(null);
  const [liczbao3, setLiczbao3] = useState(null);
  const [wireframe, setWireframe] = useState(true);
  return (
    <>
      <form>
        <div className="form">
          <div className="container">
            <label htmlFor="bok1">Szerokość graniastosłupa</label>
            <br />
            <input
              id="bok1"
              type="number"
              onChange={(e: any) => setLiczbak1(e.target.value)}
            ></input>
          </div>
          <div className="container">
            <label htmlFor="bok2">Wysokość graniastosłupa</label>
            <br />
            <input
              id="bok2"
              type="number"
              onChange={(e: any) => setLiczbak2(e.target.value)}
            ></input>
          </div>
          <div className="container">
            <label htmlFor="bok3">Głębokość graniastosłupa</label>
            <br />
            <input
              id="bok3"
              type="number"
              onChange={(e: any) => setLiczbak3(e.target.value)}
            ></input>
          </div>
        </div>
      </form>
      <div className="kontener-plotno">
        <Canvas>
          <mesh>
            <boxGeometry args={[liczbak1, liczbak2, liczbak3]} />
            <meshPhongMaterial wireframe={wireframe} />
            <ambientLight intensity={0.1} />
            <OrbitControls />
          </mesh>
        </Canvas>
      </div>

      <form>
        <div className="form">
          <div className="container">
            <label htmlFor="bok4">Promień podstawy stożka</label>
            <br />
            <input
              id="bok4"
              type="number"
              onChange={(e: any) => setLiczbao1(e.target.value)}
            ></input>
          </div>
          <div className="container">
            <label htmlFor="bok5">Wysokość stożka</label>
            <br />
            <input
              id="bok5"
              type="number"
              onChange={(e: any) => setLiczbao2(e.target.value)}
            ></input>
          </div>
          <div className="container">
            <label htmlFor="bok6">Ilość krawędzi w podstawie stożka</label>
            <br />
            <input
              id="bok6"
              type="number"
              onChange={(e: any) => setLiczbao3(e.target.value)}
            ></input>
          </div>
        </div>
      </form>
      <div className="kontener-plotno">
        <Canvas>
          <mesh>
            <coneGeometry args={[liczbao1, liczbao2, liczbao3]} />
            <OrbitControls />
            <meshPhongMaterial wireframe={wireframe} />
            <ambientLight intensity={0.1} />
          </mesh>
        </Canvas>
      </div>
      <form className="footer">
        <label>Siatka</label>
        <input
          id="box"
          type="checkbox"
          checked={wireframe}
          onChange={(e: any) => setWireframe(e.target.checked)}
        ></input>
      </form>
    </>
  );
}

export default App;
