import React, { useEffect } from 'react'
import { connect } from 'react-redux'
function Todolist({todos,addNewTodo,deleteTodo}) {
  useEffect(()=>{
    console.log("todolist rerendered")
  })
  return (
    <div className='container'>
        <h1>Todolist</h1>
        <input type="text" id='d1'/>
        <button onClick={()=>{addNewTodo(document.getElementById("d1").value)}}>
            Add Todo
        </button>
        {
            todos.map((todo,i)=>{
                return <li>
                    {todo}
                    <button onClick={()=>{deleteTodo(i)}}>Delete</button>
                  </li>
            })
        }
    </div>
  )
}
function mapStateToProps(state){
  return state.todoReducer
}
function mapDispatchToProps(dispatch){
  return {
    addNewTodo:(nt)=>{dispatch({type:'ADD_TODO',payload:nt})},
    deleteTodo:(index)=>{dispatch({type:"DELETE_TODO",payload:index})}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Todolist)