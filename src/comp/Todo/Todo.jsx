import { useState } from "react";
import Form from "./Form";
import List from "./List";

function Todo() {
  const [tasks, setTasks] = useState([]);

  function handleAddTask(input) {
    const newTask = {
      id: Date.now(),
      text: input,
    };

    setTasks((prev) => [...prev, newTask]);
  }

  function handleDeleteTask(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  return (
    <section>
      <h1>ToDo App</h1>
      <Form addTask={handleAddTask} />
      <List tasks={tasks} deleteTask={handleDeleteTask} />
    </section>
  );
}

export default Todo;
