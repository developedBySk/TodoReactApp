import React from 'react';

const Form = ({inputText,setInputText,todos,setTodos}) =>{
    const inputTextHandler = (e) =>{
        setInputText(e.target.value)
    }
    const submitTodoHandler = (e) =>{
        e.preventDefault() 
        setTodos([
            ...todos, {text : inputText, completed:false, id : Math.random() * 1000}
        ])
        setInputText(" ")
    }                                       
    return(
        <div>
            <form>
            <input value={inputText} onChange={inputTextHandler} type="text" required></input>
                <button onClick={submitTodoHandler} type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
            </form>
        </div>
    )
}
export default Form;