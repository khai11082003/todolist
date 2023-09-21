import React, { useState } from 'react'
import "./FormTodo.scss"
export default function FormTodo({AddData}) {
    const [Value,setValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        AddData(Value);
        setValue("")
    }

  return (
    <form onSubmit={handleSubmit} className='Form'>
        <input className='input' type='text' placeholder='Task?' value={Value} onChange={(e) => setValue(e.target.value)}/>
        <button className='add' type='submit'>Add</button>
    </form>
  )
}
