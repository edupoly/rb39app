import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup';
function Validations() {
    var studentForm =   useFormik({
        initialValues:{
            gender:'',
            age:'',
            country:''
        },
        validationSchema:Yup.object({
            age:Yup.number().test("AgeValidation","Default Error for Age",(value,ctx)=>{
                if(ctx.parent.gender==='male' && value<25){
                    return ctx.createError({path:ctx.path,message:"Men should be more than 25"})
                }
                if(ctx.parent.gender==='female' && value<23){
                    return ctx.createError({path:ctx.path,message:"Female should be more than 23"})
                }
                return true
            }),
            country:Yup.string().test("CountryValidation","Default Country Error",(value,ctx)=>{
                return new Promise((resolve,reject)=>{
                    fetch("https://restcountries.com/v3/name/"+value)
                    .then(res=>{
                        if(res.status===404){
                            reject(ctx.createError({path:ctx.path,message:"this country is not there"}))
                        }
                        else{
                            resolve(true)
                        }
                    })
                })
            })
        }),
        onSubmit:(values)=>{
            console.log(values)
        }
    })

    return (
            <div className='container'>
                <form onSubmit={studentForm.handleSubmit} className="form-group d-flex flex-wrap flex-column align-items-center ">
                    <div className='w-50 d-flex justify-content-evenly'>
                        <div>
                            <input type="radio" {...studentForm.getFieldProps('gender')} value='male' />:Male
                        </div>
                        <div>
                            <input type="radio" {...studentForm.getFieldProps('gender')} name='gender' value='female' />:Female
                        </div>
                    </div>
                    <br />
                    <input type="text" {...studentForm.getFieldProps('age')} className='form-control w-50' placeholder='Enter your age'/>
                    <br />
                    <span>{studentForm.touched.age && studentForm.errors.age}</span>
                    <br />
                    <br />
                    <input type="text" {...studentForm.getFieldProps('country')} className='form-control w-50' placeholder='Enter your Country'/>
                    <br />
                    <span>{studentForm.touched.country && studentForm.errors.country}</span>
                    <br />
                    <button className='w-50 btn btn-success'>Register</button>
                </form>
            </div>
    )
}

export default Validations