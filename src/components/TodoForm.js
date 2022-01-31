import React, { useState } from 'react';





function TodoForm() {
const [input,setInput] = useState('')


const handleChange = e => {
    setInput(e.target.value)
    console.log(e.target.value)
}

const handleSubmit = e => {
    e.preventDefault();

    // props.onSubmit({
    // id: Math.floor(Math.random() *10000)
    // });
    setInput('')
};


return(
<form className='todo-form' onSubmit={handleSubmit} >
    <input 
    type='text' 
    className='todo-input' 
    placeholder='new todo'
    name='text'
    value={input}
    onChange={handleChange}
    ></input>
    <button className='todo-button'>Add todo</button>
</form>
)

}

export default TodoForm;
