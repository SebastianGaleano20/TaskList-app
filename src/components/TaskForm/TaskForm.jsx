/* eslint-disable react/prop-types */
import { useState} from "react";
import "./TaskForm.css";


const Form = ({ createTask }) => {
  //Creamos el estado de la nueva tarea asignada
  const [newTask, setnewTask] = useState("");
  //Creamos una funcion para manipular el evento en el formulario
  const handleSubmit = (e) => {
    //Funcion para cancelar el valor por defecto del formulario (no se actualiza)
    e.preventDefault();
    //Recibimos la funcion createTask utilizando como parametro la variable newTask creada anteriormente
    createTask(newTask);
    //Creamos la key 'Task' asignandole el valor de la variable para guardar en el localStorage
  };


  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <input
          className="newTask"
          type="text"
          value={newTask}
          placeholder="Ingrese una tarea"
          //Recibimos el evento en input y le asignamos a newTaks el valor de target
          onChange={(e) => setnewTask(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default Form;
