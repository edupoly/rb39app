import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

function Countries() {
    var [countries,setCountries] = useState([])
    useEffect(()=>{
        fetch("https://restcountries.com/v3/all")
        .then(res=>res.json())
        .then(data=>{
            setCountries((prev)=>{
                return [...prev,...data]
            })
        })
    },[])
    return (
        <div className='container'>
            <h1>Countries</h1>
            <div className="d-flex flex-wrap">
                <ul className='w-25'>
                    {
                        countries.map((c)=>{
                            return <Link to={`countryDetails/${c.name.common}`}><li>{c.name.common}</li></Link>
                        })
                    }
                </ul>
                <div className='w-75'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    )
}

export default Countries