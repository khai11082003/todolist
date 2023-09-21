import React, { useState } from 'react'

export default function Todo1({editData,Id}) {
    const [Values,setValues] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        editData(Values,Id)
        setValues("")
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type='text' placeholder='editTask?' value={Values} onChange={(e) => setValues(e.target.value)}/>
        <button type='submit'>Add</button>
    </form>
  )
}
