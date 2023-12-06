import { useState } from 'react';
import './App.css';
import { Form } from './component/Form';
import { Header } from './component/Header';
import Todos_List from './component/Todos_List';


function App() {
  const [input,setInput] = useState("");
  const [todos,setTodos] = useState([]);
  const [editTodo, SetEdit] = useState(null);
  
  return (
    <div className="container">
      <div className='wrapper'>
        <div>
           <Header/>
        </div>
        <div>
          <Form
            input = {input}
            setInput = {setInput}
            todos = {todos}
            setTodos = {setTodos}
            editTodo = {editTodo}
            SetEdit = {SetEdit}
            
          />
        </div>
        <div className='h-75 my-4 overflow-hidden overflow-y-scroll scroll' >
          <Todos_List
            todos={todos}
            setTodos={setTodos}
            SetEdit = {SetEdit}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
