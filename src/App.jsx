//useState yra react hook kuris leidzia mums prideti state prie funkciniu komponentu.
import "./App.css";
import Counter from "./comp/Counter/Counter";
import SetName from "./comp/SetName/SetName";
import Profile from "./comp/Profile/Profile";
import PriceCalc from "./comp/PriceCalc/PriceCalc";
import Word from "./comp/Word/Word";
import Rabbit from "./comp/Rabbit/Rabbit";
import SpeedCounter from "./comp/SpeedCounter/SpeedCounter";
import Runners from "./comp/Runners/Runners";
import Chickens from "./comp/Chickens/Chickens";
import Todo from "./comp/Todo/Todo";

function App() {
  //count yra kintamasis kuris saugo counter reiksme
  //setCount yra funkcija kuri leidzia mums atnaujinti count reiksme
  //useState(0) yra pradinė count reiksme, kuri yra 0

  return (
    <div>
      <Counter />
      <SetName />
      <Profile />
      <PriceCalc />
      <Word />
      <Rabbit />
      <SpeedCounter />
      <Runners />
      <Chickens />
      <Todo />
    </div>
  );
}
export default App;
