import React, {useState} from 'react';
import './styles.css'

function App() {

  const [todo, setTodo] = useState('')
  const {todos, setTodos} = useState([]);

  const addTodo = ()=>{
    console.log(todo);
    const item = todo;
    setTodos(oldItems => [...oldItems, item])
   
  }


  return (
    <div className="App">

      <div className='todo' >
      <h1>Todo List App</h1>
      </div>

      <input
      value={todo}
      onChange={e => setTodo(e.target.value)}
       className='input' type='text' placeholder='Add an item..' ></input>

      <button
      onClick={()=> addTodo()}
      >Add</button>

      <div className='todoList' >
        <ul>
        {todos.map((item,index) => {
          <li key={index} >{item} </li>
        })}
        </ul>

      </div>
      

     
    </div>
  );
}

export default App;