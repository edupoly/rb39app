import React,{useEffect} from 'react'
import { connect } from 'react-redux'
function Products({productReducer:{allproducts,cartItems},dispatch}) {
    useEffect(()=>{
        console.log("Products rerendered")
      })
  return (
    <div className='container'>
        <h1>Products</h1>
        <div className='d-flex flex-wrap'>
            {
                allproducts.map((p)=>{
                    return <div className="card m-2" style={{width:"10rem"}}>
                                <img src={p.image} className="card-img-top" style={{height:'100px'}} alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{p.title.slice(0,10)}</h5>
                                    <p className="card-text">{p.description.slice(0,20)}</p>
                                    
                                    {
                                        cartItems.some((citem)=>{
                                            if(citem.id===p.id){return true}
                                            else{return false}
                                        })?<button className="btn btn-warning">Go To Cart</button>:<button className="btn btn-primary" onClick={()=>{dispatch({type:'ADD_TO_CART',payload:p})}}>Add To Cart</button>
                                    }
                                    
                                </div>
                            </div>
                })
            }
        </div>
    </div>
  )
}

export default connect(store=>store)(Products)