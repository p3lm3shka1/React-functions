import { useState } from "react";

function Form({ addTask }) {
  const [input, setInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    addTask(input);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Įveskite naują užduotį"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button type="submit">Prideti</button>
    </form>
  );
}

export default Form;
