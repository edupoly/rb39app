import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

function CountryDetails() {
    var x = useParams()
    var [details,setDetails] = useState({})
    useEffect(()=>{
        fetch(`https://restcountries.com/v3/name/${x.cname}`)
        .then(res=>res.json())
        .then(data=>{
            setDetails({...data[0]})
        })
    },[x.cname])
  return (
    <div className='container'>
        <h1>{x.cname} CountryDetails</h1>
        <h2>{details.population}</h2>
        <img src={details.flags[0]} className='w-100' alt="" />
    </div>
  )
}

export default CountryDetails