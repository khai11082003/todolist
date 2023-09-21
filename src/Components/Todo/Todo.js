import React from 'react'
import Todo1 from '../EditTodo/Todo1';
import "./Todo.scss"
export default function Todo({Data,deleteTodo,editTask,editData,toggleComplete}) {
    const TaskData = Data.map((e,index) => {return e.isEditTing ? <Todo1 key={index} editData = {editData} Id = {e.id}/> : <div className='inner-List'><li key={index}>{e.task}</li><div className='button'><button onClick={(en) => editTask(e.id) }>sửa</button> <button onClick={(en) => deleteTodo(e.id)}>xóa</button> <input type='button' onClick={(en) => {toggleComplete(e.id)}} value={`${e.completed ? "com" : "no-com"}`}></input></div> </div>});
  return (
    <ul className='WrapperData'>
        {TaskData}
    </ul>
  )
}
