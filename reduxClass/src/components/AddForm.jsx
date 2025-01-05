import { useState } from "react";
import { addTodo } from "../features/todo/TodoSlice";
import { useDispatch } from "react-redux";
import './AddForm.css';


export default function AddForm(){
    const [task,setTask] = useState('');

    const dispatch = useDispatch();

    const taskHandler = (e)=>{
        e.preventDefault();
        dispatch(addTodo(task));
        setTask('');
    }
    
    return(
        <>
        <form onSubmit={taskHandler} >
        <input type="text " onChange={e=>{setTask(e.target.value)}} value={task} ></input>
        <button>Add task</button>
        </form>
        </>
        
    )
}
