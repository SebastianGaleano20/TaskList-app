/* eslint-disable react/prop-types */
const TaskItems = ({ task, toggleTask }) => {
  return (
    <tr>
      <td style={{ textDecoration: task.completada ? "line-through" : "none" }}>
        {task.nombre}
        <input
          type="checkbox"
          checked={task.completada}
          onChange={() => toggleTask(task)}
        />
      </td>
    </tr>
  );
};
export default TaskItems;
