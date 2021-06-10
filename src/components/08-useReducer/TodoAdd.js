import React from "react";
import { useForm } from "../../hooks/useForm";

export const TodoAdd = ({ handleAddTodo }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim() <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };
    handleAddTodo(newTodo);
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control"
        name="description"
        placeholder="Aprender..."
        autoComplete="off"
        value={description}
        onChange={handleInputChange}
      />
      <button className="btn btn-outline-primary mt-1 btn-block" type="submit">
        Agregar
      </button>
    </form>
  );
};
