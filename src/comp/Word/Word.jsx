import { useState } from "react";

function Word() {
  const [word, setWord] = useState("");

  function pomidoras(word) {
    setWord(word);
  }

  return (
    <section>
      <p>Pakeisk zodi: {word}</p>
      <button onClick={() => pomidoras("Pomidoras")}>Pomidoras</button>
      <button onClick={() => pomidoras("Agurkas")}>Agurkas</button>
    </section>
  );
}

export default Word;
