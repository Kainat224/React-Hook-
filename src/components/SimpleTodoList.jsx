import React, { useState } from 'react';

const SimpleTodoList = () => {

    const todosData = [
        {
           id:0, companyName:'Innovative Coders', awward:'First'
        },
        {
            id:1, companyName:'Evolutionary Mind', awward:'Super First'
        },
        {
            id:2, companyName:'EvoTech', awward:'Second'
        }
    ]

    const [changeVal, setChangeVal] = useState(todosData);

    const clearData = () =>{
        setChangeVal([]);
    }

    const removeTodo = (id) => {
        // alert(id);
        const myNewArray = changeVal.filter((todo) => {
            return todo.id !== id;
        })
        setChangeVal(myNewArray);
    }

    return (
    <div className='designing'>
            {
                changeVal.map((todo) => {
                return (
                    <h1 className='h1Design'>Company Name: {todo.companyName} Awward {todo.awward}  <button onClick={()=>removeTodo(todo.id)}>Remove</button></h1>
                   
                )})
            }
            
        <button onClick={clearData}>Clear</button>
    </div>
    )
}

export default SimpleTodoList
