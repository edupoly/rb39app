import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/js/bootstrap.min'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from './components/Home';
import Pricing from './components/Pricing';
import Aboutus from './components/Aboutus';
import Countries from './components/Countries';
import CountryDetails from './components/CountryDetails';
import Student from './components/Student';
import Validations from './components/Validations';
import Employee from './components/Employee';
import { Provider } from 'react-redux';
import store from './store/store';
import Counter from './components/Counter';
import Todolist from './components/Todolist';
import Products from './components/Products';
import Cart from './components/Cart';
const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/price",
                element:<Pricing></Pricing>
            },
            {
                path:"/aboutus",
                element:<Aboutus></Aboutus>
            },
            {
                path:"/studentRegistration",
                element:<Student></Student>
            },
            {
                path:"/validation",
                element:<Validations></Validations>
            },
            {
                path:"/employeeForm",
                element:<Employee></Employee>
            },
            {
                path:"/todolist",
                element:<Todolist></Todolist>
            },
            {
                path:"/counter",
                element:<Counter></Counter>
            },
            {
                path:"/products",
                element:<Products></Products>
            },
            {
                path:"/cart",
                element:<Cart></Cart>
            },
            {
                path:'/countries',
                element:<Countries></Countries>,
                children:[
                    {
                        path:'/countries/countryDetails/:cname',
                        element:<CountryDetails></CountryDetails>
                    }
                ]
            },
            
        ]
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
);

reportWebVitals();
