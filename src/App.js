import "./App.css";
import { useState, useEffect } from "react";
import TodoForm from "./components/todoForm/TodoForm";
import TodoList from "./components/todoItems/TodoList";
import TodoFooter from "./components/todoFooter/TodoFooter";
function App() {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch("data/todo.json")
      .then((response) => response.json())
      .then((data) => setState(data));
  }, []);




  function add(text) {
    setState([
      ...state,
      {
        id: state[state.length - 1].id + 1,
        title: text,
        completed: false,
      },
    ]);
  }
  function deleteItem(id) {
    let afterDelete = state.filter((todo) => todo.id !== id);
    setState(afterDelete);
  }
  function clearCompleted() {
    let notCompleted = state.filter((todo) => !todo.completed);
    setState(notCompleted);
  }
  function changeStatus(todo) {
    setState(
      state.map((todoItem) => {
        if (todoItem.id === todo.id) {
          return todo;
        } else {
          return todoItem;
        }
      })
    );
  }
  return (
    <div className="App">
      <TodoForm add={(text) => add(text)} />
      <TodoList
        todos={state}
        deleteItem={(id) => deleteItem(id)}
        changeStatus={(todo) => changeStatus(todo)}
      />

      <TodoFooter todos={state} clearCompleted={clearCompleted} />
    </div>
  );
}

export default App;
