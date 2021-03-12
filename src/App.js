import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todoList, setTodoList] = useState(() => {
    return [
      { id: 1, title: 'hung' },
      { id: 2, title: 'van' },
      { id: 3, title: 'phung' }
    ]
  })

  function handleTodoClick(todo) {
    const newTodoList = todoList.filter(x => x.id !== todo.id);
    setTodoList(newTodoList);
  }

  function handleTodoFormSubmit(newTodoItem) {
    setTodoList([...todoList, newTodoItem]);
  }
  return (
    <div className="app">
      <TodoForm onTodoFormSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;
