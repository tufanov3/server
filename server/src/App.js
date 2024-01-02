import styles from './App.module.css';
import { useState, useEffect } from 'react'
import { Todo } from './components'
function App() {
  const[todos, setTodos] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((todosData) => todosData.json())
      .then((loadedTodos) => setTodos(loadedTodos))
  }, [])
  return (
    <div className={styles.app}>
      {todos.map(({id, title, completed}) => (
        <Todo key={id} title={title} completed={completed}/>
      ))}
    </div>
  );
}

export default App;
