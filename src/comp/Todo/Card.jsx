function Card({ task, deleteTask }) {
  return (
    <div>
      <span>{task.text}</span>
      <button onClick={() => deleteTask(task.id)}>Pašalinti</button>
    </div>
  );
}

export default Card;
