import React from "react";

export const TodoListItem = ({ todo, index, handleDelete, handleCheck }) => {
  return (
    <li className="list-group-item">
      <p
        onClick={() => handleCheck(todo.id)}
        className={`text-center ${todo.done && "complete"} `}
      >
        {index + 1}. {todo.desc}
      </p>
      <button className="btn btn-danger" onClick={() => handleDelete(todo.id)}>
        Borrar
      </button>
    </li>
  );
};
