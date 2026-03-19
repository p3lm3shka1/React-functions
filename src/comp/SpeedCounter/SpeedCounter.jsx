import { useState } from "react";

function SpeedCounter() {
  const [speed, setSpeed] = useState(0);

  function increaseSpeed10() {
    setSpeed(speed + 10);
  }

  function increaseSpeed20() {
    setSpeed(speed + 20);
  }
  function decreaseSpeed() {
    setSpeed(0);
  }

  function speedDescribe() {
    if (speed === 0) {
      return "Stovi vietoje";
    } else if (speed < 20) {
      return "Letas greitis";
    } else if (speed < 60) {
      return "Vidutinis greitis";
    } else {
      return "Koks tu greitas";
    }
  }

  return (
    <section>
      <h2>Greitis</h2>
      <p>Dabartinis greitis: {speed} km/h</p>
      <p>Greicio aprasymas: {speedDescribe()}</p>
      <button onClick={increaseSpeed10}>Greitis +10</button>
      <button onClick={increaseSpeed20}>Greitis +20</button>
      <button onClick={decreaseSpeed}>Sumažinti greitį</button>
    </section>
  );
}

export default SpeedCounter;
