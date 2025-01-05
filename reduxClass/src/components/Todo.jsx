import { useDispatch, useSelector } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo, markAsDoneTodo } from "../features/todo/TodoSlice";

function Todo(){

    const todos = useSelector((state)=>state.todos);
    const dispatch = useDispatch();

    console.log(todos);

    const deleteHandler = (id)=>{
        // console.log(id);
        dispatch(deleteTodo(id));
        
    }  

    const markAsDoneHandler=(id)=>{
        dispatch(markAsDoneTodo(id));
        console.log(id);
    }

    return(
        <>        
            <AddForm/>
            <h1>Todo List</h1>
            {todos.map(todo=>(<li key={todo.id}>{todo.task} &nbsp;&nbsp;&nbsp;<button onClick={()=>deleteHandler(todo.id)}>delete</button>&nbsp;<button onClick={()=>markAsDoneHandler(todo.id)}>mark as done</button><br/><br/></li>))}
            <hr/>
        </>
    )
}

export default Todo;