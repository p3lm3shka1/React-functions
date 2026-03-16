import { useState } from "react";

function Word() {
  const [word, setWord] = useState("");

  function pomidoras() {
    setWord("Pomidoras");
  }

  function agurkas() {
    setWord("Agurkas");
  }

  return (
    <section>
      <p>Pakeisk zodi: {word}</p>
      <button onClick={pomidoras}>Pomidoras</button>
      <button onClick={agurkas}>Agurkas</button>
    </section>
  );
}

export default Word;
