import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';

function Student() {
    var studentForm =   useFormik({
                            initialValues:{
                                firstname:'',
                                lastname:'',
                                age:'',
                                country:'',
                                gender:''
                            },
                            validationSchema:Yup.object({
                                firstname:Yup.string().min(3,"kanisha muudu letters").required("must enter firstname"),
                                age:Yup.number(),
                            }),
                            onSubmit:(values)=>{
                                console.log(values)
                            }
                        })
    // useEffect(()=>{
    //     console.log(studentForm.errors)
    // })
  return (
    <div className='container'>
        <b>Student Registration</b>
        <form onSubmit={studentForm.handleSubmit}>
            <input type="text" {...studentForm.getFieldProps('firstname')} className="form-control is-invalid"/>
            <br/>
            <span>{studentForm.touched.firstname && studentForm.errors.firstname}</span>
            <br />
            <input type="text" name="lastname" onChange={studentForm.handleChange} onBlur={studentForm.handleBlur}/>
            <br />
            <br />
            <input type="text" {...studentForm.getFieldProps('age')}/>
            <br />
            <span>{studentForm.touched.age && studentForm.errors.age}</span>
            <br />
            <input type="text" {...studentForm.getFieldProps('country')}/>
            <br />
            <span>{studentForm.touched.country && studentForm.errors.country}</span>
            <br />
            <input type="radio" {...studentForm.getFieldProps('gender')} value="male"/>:Male
            <input type="radio" {...studentForm.getFieldProps('gender')} value="female" />:Female
            <input type="radio" {...studentForm.getFieldProps('gender')} value="others" />:Others
            <br />
            <br />
            <input type="checkbox" {...studentForm.getFieldProps('techs')} value="njs" />:NodeJS
            <input type="checkbox" {...studentForm.getFieldProps('techs')} value="ajs" />:Angular
            <input type="checkbox" {...studentForm.getFieldProps('techs')} value="rjs"/>:ReactJS
            <br />
            <button>Register</button>
        </form>
    </div>
  )
}

export default Student