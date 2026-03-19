import { useState } from "react";

function Chickens() {
  const orders = 30;
  const [eggs, setEggs] = useState("");

  function checkOrders() {
    const totalEggs = Number(eggs);

    if (totalEggs === 0) return "Iveskite kiausiniu kieki";
    if (totalEggs >= orders) {
      return `Uzsakymas ivykdytas. Tau liko: ${totalEggs - orders} kiausiniu`;
    } else {
      return `Nepakankama, dar reikia: ${orders - totalEggs} kiausiniu`;
    }
  }

  return (
    <section>
      <h2>Vistos</h2>
      <input
        type="number"
        placeholder="Iveskite kiausiniu kieki"
        value={eggs}
        onChange={(e) => setEggs(e.target.value)}
      />
      <p>{checkOrders()}</p>
    </section>
  );
}

export default Chickens;
