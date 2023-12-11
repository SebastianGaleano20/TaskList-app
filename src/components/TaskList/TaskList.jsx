/* eslint-disable react/prop-types */
import TaskItems from "../TaskItems/TaskItems";

const TaskList = ({ task, toggleTask }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Tareas:</th>
        </tr>
      </thead>
      <tbody>
        {task.map((task) => (
          <TaskItems 
          task={task}
          key={task.nombre} 
          toggleTask={toggleTask} />
        ))}
      </tbody>
    </table>
  );
};

export default TaskList;
