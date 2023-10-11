import { FC, useState } from "react";
import TodoItem from "./TodoItem";
import "./App.css";
import {todoType} from './AppType'



const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [taskTime, setTaskTime] = useState<number>(0);
  const [todoTasks, setTodoTasks] = useState<todoType[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setTaskTime(Number(event.target.value));
    }
  };

  const addNewTask = () => {
    const newTask = { taskName: task, taskTime: Number(taskTime) };
    setTodoTasks([...todoTasks, newTask]);
    setTask("");
    setTaskTime(0);
  };

  const deleteTask=(nameToDelete:string):void=>{
    setTodoTasks(
      todoTasks.filter((task)=>{return task.taskName!==nameToDelete})
    )
  }

  console.log(task);
  return (
    <div className="App" >
      <div className="maincard">
        <input 
          className="maincardinput"
          type="text"
          name="task"
          value={task}
          onChange={handleChange}
          placeholder="Task Giriniz"
        />
        <input
          className="maincardinput"
          type="number"
          name="taskTime"
          value={taskTime}
          onChange={handleChange}
          placeholder="Task Süresi Giriniz"
        />
        <button className="maincardbutton" onClick={addNewTask}>EKLE</button>
      </div>
      <div className="todocart">
        {todoTasks.map((task, key) => {
          return <TodoItem key={key} task={task} deleteTask={deleteTask}/>
        })}
      </div>
    </div>
  );
};

export default App;
