import React from "react";
import { motion } from 'framer-motion';

const Todos_List = ({ todos, setTodos, SetEdit }) => {
  //Delete
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //Complete
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    SetEdit(findTodo);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {todos.map((todo) => (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <li className="list-item" key={todo.id}>
            <input
              type="text"
              value={todo.title}
              className={`list ${todo.completed ? "complete" : ""}`}
              onChange={(e) => e.preventDefault()}
            />
            <div>
              <button
                className="button-complete task-button"
                onClick={() => handleComplete(todo)}
              >
                <i class="fa-solid fa-check"></i>
              </button>
              <button
                className="button-edit task-button"
                onClick={() => handleEdit(todo)}
              >
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button
                className="button-delete task-button"
                onClick={() => handleDelete(todo)}
              >
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </li>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Todos_List;
