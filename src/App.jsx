/* eslint-disable no-unused-vars */
import "./App.css";
import Header from "./components/Header/Header";
import Form from "./components/TaskForm/TaskForm";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [tasksItems, setTaskItems] = useState([]);
  //Creamos la funcion para crear la nueva tarea utilizando como parametro el input en formulario
  function createTask(taskName) {
    //Usamos some para verificar si la tarea nueva se repite
    const taskExist = tasksItems.some((task) => task.nombre === taskName);
    if (!taskExist) {
      //En caso de ser una tarea que no se repita, se añade a la lista
      setTaskItems([
        ...tasksItems,
        { nombre: taskName, completada: false, id: uuidv4() },
      ]);
    }
  }
  //Efecto para obtener la lista de tareas en localStore
 useEffect(()=>{
  let data = localStorage.getItem('Tasks')
  if(data){
    setTaskItems(JSON.parse(data)); //Parseamos la data para guardarla en el localStore
  }
 },[])
 //Efecto para persistir la data en la lista de tareas
  useEffect(() => {
    localStorage.setItem("Tasks", JSON.stringify(tasksItems));
  }, [tasksItems]); 
  return (
    <>
      <Header />
      {/* Le indicamos una prop a Form en este caso la funcion creada para conectarlo con input  */}
      <Form createTask={createTask} />
      <table>
        <thead>
          <tr>
            <th>Lista de tareas: </th>
          </tr>
        </thead>
        <tbody>
          {/* Iteramos taskItems para retornar sus valores */}
          {tasksItems.map((task) => (
            <tr key={task.nombre}>
              {/*renderizamos utilizando el nombre como key para que no se repitan tareas*/}
              <td>
                {task.nombre}
                {/*Mostramos en cada espacio iterado el nombre/tarea*/}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
