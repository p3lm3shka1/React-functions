import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    if (count === 10) {
      return;
    }
    setCount(count + 1);
  }

  function resetCount() {
    setCount(0);
  }

  function decreaseCount() {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  }

  return (
    <section>
      <h2>counter example</h2>
      <p>you have: {count}</p>
      <button className="increment" onClick={increaseCount}>
        Increment
      </button>
      <button className="reset" onClick={resetCount}>
        Reset
      </button>
      <button className="decrement" onClick={decreaseCount}>
        Decrement
      </button>
    </section>
  );
}

export default Counter;
