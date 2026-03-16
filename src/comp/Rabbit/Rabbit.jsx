import { useState } from "react";

function Rabbit() {
  const [jump, setJumped] = useState("");

  function randomJump() {
    const random = Math.random() > 0.2;
    setJumped(random);
  }

  function totallyJumped() {
    setJumped(true);
  }

  return (
    <section>
      <h2>Zuikis</h2>
      <p>Ar zuikis peršoko? {jump ? "Taip" : "Ne"}</p>
      <button onClick={randomJump}>Ar persoks zuikis?</button>
      <button onClick={totallyJumped}>Priversti zuikį peršokti</button>
    </section>
  );
}

export default Rabbit;
