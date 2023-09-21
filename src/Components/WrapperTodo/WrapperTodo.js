import React, { useState } from 'react'
import FormTodo from '../FormTodo/FormTodo'
import Todo from '../Todo/Todo';
import {v4 as uuidv4} from 'uuid';
import Button from '../Button/Button';
import "./WrappertTodo.scss"

export default function WrapperTodo() {

    const [Data,setData] = useState([]);
    const [fData,setfData] = useState([]);

    const AddData = (value) => {
        const newArr = [...Data,{
            id: uuidv4(),
            completed: false,
            task: value,
            isEditTing: false,
        }]
        setData(newArr);
        setfData(newArr);
    }
    const deleteTodo = (id) => {
        const newArr = Data.filter((data) => {
            return data.id !== id;
         })
        setData(newArr);
        setfData(newArr);
    }
    const editTask = (id) => {
        const newArr = Data.map((data) => {
            return data.id === id ? {...data,isEditTing: !data.isEditTing} : data;
        })
        setData(newArr);
        }

        const editData = (Value,Id) => {
        const newArr = Data.map((data) => {
            return data.id === Id ? {...data,task: Value,isEditTing: !data.isEditTing} : data;
        })
        setData(newArr);

    }
    const toggleComplete =  (id) => {
        const newArr = Data.map((data) => {
            return data.id === id ? {...data,completed: !data.completed} : data;
        })
        setfData(newArr)
        setData(newArr);

    }
    const render = (number) => {
        if(number === 1){
            setData(fData);
        }
        else if(number === 2){
            setData(fData.filter(
                (data) => {
                    return data.completed === true;
                }
            ))
        }
        else if(number === 3){
            setData(fData.filter(
                (data) => {
                    return data.completed === false;
                }
            ))
        }
    }
        return (
            <div className='WrapperTodo'>
                <FormTodo AddData = {AddData}/>
                <Button render = {render}/>
                <Todo Data = {Data} deleteTodo = {deleteTodo} editTask = {editTask} editData = {editData} toggleComplete={toggleComplete} />
            </div>
          )
    }



