import { useState } from "react";

function Runners() {
  const [runner1, setRunner1] = useState("");
  const [runner2, setRunner2] = useState("");

  function winner() {
    const r1 = Number(runner1);
    const r2 = Number(runner2);

    if (runner1 === "" || runner2 === "") return;
    if (r1 < r2) {
      return `Begikas 1 yra greitesnis ${(r2 - r1).toFixed(2)} sek.`;
    } else if (r2 < r1) {
      return `Begikas 2 yra greitesnis ${(r1 - r2).toFixed(2)} sek.`;
    } else {
      return "Abu begikai turi ta pati laika";
    }
  }

  return (
    <section>
      <h2>100 m begimas</h2>
      <p>Begikas 1</p>
      <input
        type="number"
        placeholder="Iveskit laika"
        value={runner1}
        onChange={(e) => setRunner1(e.target.value)}
      />
      <p>Begikas 2</p>
      <input
        type="number"
        placeholder="Iveskit laika"
        value={runner2}
        onChange={(e) => setRunner2(e.target.value)}
      />
      <p>{winner()}</p>
    </section>
  );
}

export default Runners;
