import React,{useEffect} from 'react'
import { connect } from 'react-redux'
function Counter({count,incCount,decCount}) {

  useEffect(()=>{
    console.log("counter rerendered")
  })
  return (
    <div className='container'>
        <h1>Counter:{count}</h1>
        <button onClick={decCount}>Decrement</button>
        <button onClick={incCount}>Increment</button>
    </div>
  )
}
function mapStateToProps(state){return state.counterReducer}
function mapDispatchToProps(dispatch){
  return {
    incCount:()=>{dispatch({type:'INC'})},
    decCount:()=>{dispatch({type:"DEC"})}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter)