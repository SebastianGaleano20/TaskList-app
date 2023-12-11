/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "../src/components/TaskForm/TaskForm";
import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";
import "./App.css";

function App() {
  const [tasksItems, setTaskItems] = useState([]);

  function createTask(taskName) {
    const taskExist = tasksItems.some((task) => task.nombre === taskName);
    if (!taskExist) {
      setTaskItems([
        ...tasksItems,
        { nombre: taskName, completada: false, id: uuidv4() },
      ]);
    }
  }

  const toggleTask = (task) => {
    setTaskItems(
      tasksItems.map((t)=> (t.id === task.id ? {...t, completada: !t.completada}:t)))
    };
  
  useEffect(() => {
    let data = localStorage.getItem("Tasks");
    if (data) {
      setTaskItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Tasks", JSON.stringify(tasksItems));
  }, [tasksItems]);
  return (
    <>
      <Header />
      <Form createTask={createTask} />
      <TaskList task={tasksItems} toggleTask={toggleTask} />
    </>
  );
}

export default App;
