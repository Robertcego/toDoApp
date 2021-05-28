import { Button, Paper, TextField } from "@material-ui/core";
import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/todoList/TodoList.jsx";

export default function App() {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  //-----------------------------------//
  function handleAddTodo(e) {
    e.preventDefault();
    if (input !== "") {
      setTodo((prevInput) => [...prevInput, input]);
      setInput("");
    }
  }
  //-----------------------------------//
  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDo List 🎉</h1>
        <Paper>
          <TextField
            size="medium"
            variant="filled"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button
            size="large"
            color="primary"
            variant="contained"
            type="submit"
            style={{ height: "3.5rem", width: "auto" }}
            onClick={handleAddTodo}
          >
            Add
          </Button>
        </Paper>
        <TodoList todos={todo} />
      </header>
    </div>
  );
}
