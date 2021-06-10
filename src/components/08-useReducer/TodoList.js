import React from "react";
import { TodoListItem } from "./TodoListItem";

export const TodoList = ({ todos, handleDelete, handleCheck }) => {
  return (
    <ul className="list-group list-group-flush">
      {todos.map((item, i) => (
        <TodoListItem
          key={item.id}
          todo={item}
          index={i}
          handleDelete={handleDelete}
          handleCheck={handleCheck}
        />
      ))}
    </ul>
  );
};
