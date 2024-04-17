import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

// useEffect hook
function App() {
  const [todos, setTodos] = useState([]);

  fetch("http://localhost:3000/todos")
    .then(async function(res) {
      const json = await res.json();
      setTodos(json.todos);
    })

  return (
    <div>
      <h1 style={{ textAlign: "center"}}>Todo App</h1>
      <CreateTodo style={{ textAlign: "center"}}></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  )
}

export default App
