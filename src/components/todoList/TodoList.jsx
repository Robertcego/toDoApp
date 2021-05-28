import React from "react";
import Todo from "../todo/Todo";

function TodoList({ todos }) {
  const todo_style = {
    backgroundColor: "white",
    color: "black",
    height: "3rem",
    margin: "1rem 0 1rem 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "1rem",
    fontSize: "1.5rem",
  };

  return (
    <div>
      {todos.map((todo) => {
        return (
          <div style={todo_style}>
            <Todo todo={todo} />
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
