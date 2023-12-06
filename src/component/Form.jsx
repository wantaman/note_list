import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { motion } from 'framer-motion';

export const Form = ({
  input,
  setInput,
  todos,
  setTodos,
  SetEdit,
  editTodo,
}) => {
  const UpdateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    SetEdit("");
  };
  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  const onInputChange = (e) => {
    setInput(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {
      UpdateTodo(input, editTodo.id, editTodo.completed);
    }
  };

  return (
    <motion.form
      onSubmit={onSubmit}
      initial={{ opacity: 0, x: "-100vw" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "-100vw" }}
    >
      <input
        type="text"
        placeholder="Enter a note.."
        className="task-input"
        value={input}
        required
        onChange={onInputChange}
      />
      <motion.button
        className="button-add"
        type="submit"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {editTodo ? "OK" : "Add"}
      </motion.button>
    </motion.form>
  );
};
