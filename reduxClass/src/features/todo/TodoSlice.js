import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [{id:'abc' , task:'wake up', isDone:false}],
  };

export const TodoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const newTodo = {
                id:nanoid(),
                task:action.payload,
                isDone:false
            }
            state.todos.push(newTodo);
        },
        deleteTodo:(state,action)=>{
            const updatedTodo = state.todos.filter(todo=>{
               return todo.id !== action.payload;
            });
            state.todos = updatedTodo;
        },        
        markAsDoneTodo: (state, action) => {
            const updatedTodo = state.todos.map(todo => {
                if (todo.id === action.payload) {
                    return { ...todo, isDone: true }; // Return a new object with `isDone` updated
                }
                return todo; // Return the original object if it doesn't match
            });
            state.todos = updatedTodo;
        },
        
    }

});

export const {addTodo,deleteTodo,markAsDoneTodo} = TodoSlice.actions;
export default TodoSlice.reducer;
  