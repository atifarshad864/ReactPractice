import React, { useReducer } from "react";

const initialState = {
  tasks: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return {
        tasks: [
          ...state.tasks,
          { id: Date.now(), text: action.text, completed: false },
        ],
      };
    case "toggle":
      return {
        tasks: state.tasks.map((task) =>
          task.id === action.id ? { ...task, completed: !task.completed } : task
        ),
      };
    case "remove":
      return {
        tasks: state.tasks.filter((task) => task.id !== action.id),
      };
    default:
      return state;
  }
}

function TodoList() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTask = (text) => {
    dispatch({ type: "add", text });
  };

  const toggleTask = (id) => {
    dispatch({ type: "toggle", id });
  };

  const removeTask = (id) => {
    dispatch({ type: "remove", id });
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const text = e.target.task.value.trim();
          if (text !== "") {
            addTask(text);
            e.target.task.value = "";
          }
        }}
      >
        <input name="task" placeholder="Enter task" />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {state.tasks.map((task) => (
          <li
            key={task.id}
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            <span onClick={() => toggleTask(task.id)}>{task.text}</span>{" "}
            <button onClick={() => removeTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
