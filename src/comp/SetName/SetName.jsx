import { useState } from "react";

function SetName() {
  const [name, setName] = useState("");

  function handleInputCahnge(event) {
    setName(event.target.value);
  }

  return (
    <section>
      <input placeholder="iveskite varda" onChange={handleInputCahnge} />
      <p>jusu vardas: {name}</p>
    </section>
  );
}
export default SetName;
