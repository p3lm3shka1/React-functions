import { useState } from "react";

function PriceCalc() {
  const [price, setPrice] = useState(0);
  const [pvm, setPvm] = useState(21);

  function handlePriceChange(e) {
    setPrice(e.target.value);
  }

  function handlePvmChange(e) {
    setPvm(e.target.value);
  }

  function calculatePriceWithPvm() {
    const priceToNumber = Number(price);
    const pvmAmount = priceToNumber * (pvm / 100);
    return (priceToNumber + pvmAmount).toFixed(2);
  }

  return (
    <>
      <section>
        <h2>PVM Calculator</h2>
        <div>
          <label>Kaina be PVM: </label>
          <input
            type="number"
            placeholder="iveskyte kaina"
            value={price}
            onChange={handlePriceChange}
          />
        </div>
        <div>
          <label>PVM (%) </label>
          <input
            type="number"
            placeholder="iveskyte pvm"
            value={pvm}
            onChange={handlePvmChange}
          />
        </div>
        <h2>Kaina su PVM: {calculatePriceWithPvm()} </h2>
      </section>
    </>
  );
}

export default PriceCalc;
