import React from 'react';
import CallApi from './components/CallApi';
import SortObject from './components/SortObject';
import './App.css';


function Todo({ todo,index, completeTodo,removeTodo}) {
  return (
    <div className="todo"   style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
};
function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button className="btn" onClick={handleSubmit}>Add</button>
    </form>
  );
}

function App() {
  const [todos, setTodos] = React.useState([
    { text: "Learn about React",
    isCompleted: false },
    { text: "Meet friend for lunch",
    isCompleted: false },
    { text: "Build really cool todo app",
    isCompleted: false }
  ]);
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div className="App">
      <div>
        <CallApi />
        <SortObject />
      </div>
      <div className="todo-list">
        <h3>Todo Add & Display</h3>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
         <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
