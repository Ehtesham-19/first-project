import React from "react";
let names = [
  "TechNova01",
  "PixelRider",
  "ShadowBlaze",
  "LunaCoder",
  "CyberStorm",
  "EchoWave",
  "NeonPulse",
  "QuantumVibe",
  "FrostByte",
  "ZenithX",
];

function Props({ title, desp }) {
  return (
    <>
      <p>{title}</p>
      <p>{desp}</p>
      <ul>
        {names.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </>
  );
}

export default Props;
