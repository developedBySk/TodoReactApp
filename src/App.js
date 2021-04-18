import React ,{useState} from 'react';
import './App.css';
import Form from './components/form';
import './index.css'
import ListContainer from './components/ListContainer';

function App() {
  const [inputText,setInputText]=useState("");
  const [todos,setTodos]= useState([]);
  return (
    <div className="App">
      <h1>TodoList</h1>
      <Form inputText={inputText} todos = {todos} setTodos={setTodos} setInputText={setInputText} />
      <ListContainer setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
