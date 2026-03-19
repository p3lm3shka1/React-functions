import Card from "./Card";

function List({ tasks, deleteTask }) {
  return (
    <div>
      {tasks.map((task) => (
        <Card key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </div>
  );
}
export default List;
