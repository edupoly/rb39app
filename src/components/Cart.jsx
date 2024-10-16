import React,{useEffect} from 'react'
import { connect } from 'react-redux'
function Cart({cartItems,incCartItemCount,decCartItemCount}) {
    useEffect(()=>{
        console.log("todolist rerendered")
      })
  return (
    <div className='container'>Cart
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Volume</th>
                    <th>Item Price Total</th>
                </tr>
            </thead>
            <tbody>
                {cartItems.map((ci)=>{
                    return  <tr>
                                <td>{ci.title}</td>
                                <td>{ci.price}</td>
                                <td>
                                    <button className='btn btn-secondary' onClick={()=>{decCartItemCount(ci.id)}}>-</button>
                                    <b className='p-2'>{ci.count}</b>
                                    <button className='btn btn-success' onClick={()=>{incCartItemCount(ci.id)}}>+</button>
                                </td>
                                <td className='text-end'>{ci.price*ci.count}</td>
                            </tr>
                })}
            </tbody>
            <tfoot>
                <tr>
                    <th colSpan={4} className='bg-success text-end'>Total:{cartItems.reduce((a,b)=>{return a+(b.price*b.count)},0)}</th>
                </tr>
            </tfoot>
        </table>
    </div>
  )
}
function mapStateToProps(state){return state.productReducer}
function mapDispatchToProps(dispatch){
    return {
        incCartItemCount:(id)=>{dispatch({type:'INC_CART_ITEM_COUNT',payload:id})},
        decCartItemCount:(id)=>{dispatch({type:'DEC_CART_ITEM_COUNT',payload:id})}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)