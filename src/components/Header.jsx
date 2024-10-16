import React,{useEffect} from 'react'
import { Link, NavLink } from 'react-router-dom'
import {connect} from 'react-redux'
function Header({cartItems}) {
  useEffect(()=>{
    console.log("Header rerendered")
  })
  return (
    <div>
        <div class="container">
            <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <span class="fs-4">Edupoly</span>
            </a>

            <ul class="nav nav-pills">
                <li class="nav-item"><Link to="/">Home</Link></li>
                &nbsp;&nbsp;
                <li class="nav-item"><Link to="/price">Pricing</Link></li>
                &nbsp;&nbsp;
                <li class="nav-item"><Link to="/aboutus">About</Link></li>
                &nbsp;&nbsp;
                <li class="nav-item"><Link to="/studentRegistration">Register</Link></li>
                &nbsp;&nbsp;
                <li class="nav-item"><Link to="/employeeForm">Employee</Link></li>
                &nbsp;&nbsp;
                <li class="nav-item"><Link to="/validation">Validation</Link></li>
                &nbsp;&nbsp;
                <li class="nav-item"><Link to="/counter">Counter</Link></li>
                &nbsp;&nbsp;
                <li class="nav-item"><Link to="/todolist">Todolist</Link></li>
                &nbsp;&nbsp;
                <li class="nav-item"><Link to="/countries">Countries</Link></li>
                &nbsp;&nbsp;
                <li class="nav-item"><Link to="/products">Products</Link></li>
                &nbsp;&nbsp;

                <li class="nav-item">
                  <Link to="/cart">
                  <button type="button" class="btn btn-primary position-relative">
                    Cart
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {cartItems.length}
                    </span>
                  </button>
                  </Link> 
                </li>

            </ul>
            </header>
        </div>
    </div>
  )
}
function mapStateToProps(state){return state.productReducer}
export default connect(mapStateToProps)(Header)