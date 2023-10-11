import { todoType } from "./AppType";

type PropsType = {
  task: todoType;
  deleteTask(nameToDelete: string): void;
};

function TodoItem({ task, deleteTask }: PropsType) {
  return (
    <div className="card">
      <div>
        <p>{task.taskName}</p>
        <p>{task.taskTime}</p>
        <button onClick={() => deleteTask(task.taskName)}>Sil</button>
      </div>
    </div>
  );
}

export default TodoItem;
