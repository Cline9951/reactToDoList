import React from 'react';
import ToDo from './ToDo';
 
 
const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
   return (
       <div>
           {toDoList.map(todo => {
               return (
                   <ToDo todo={todo} key={todo.id} handleToggle={handleToggle} handleFilter={handleFilter}/>
               )
           })}
           <button className='btn btn-success' onClick={handleFilter}>Clear Completed</button>
       </div>
   );
};
 
export default ToDoList;