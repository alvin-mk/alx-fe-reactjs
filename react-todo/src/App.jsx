import React from 'react';
import TodoList from './TodoList';  // Import the TodoList component

function App() {
  return (
    <div className="App">
      <header>
        <h1>Todo List App</h1>
      </header>
      <main>
        <TodoList />  {/* Render the TodoList component */}
      </main>
    </div>
  );
}

export default App;
