import React from 'react'
import {Formik,Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup'
function Employee() {
    var initialValues ={
        firstname:'',
        lastname:'',
        age:''
    }
    var onSubmit = function(values){console.log(values)}
    var validationSchema = Yup.object({
        firstname:Yup.string().required("Firstname iyyara babu")
    })
  return (
    <div className='container'>
        <b>Employee Form</b>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {
                (ef)=>{
                    console.log(ef)
                    return <Form>
                            <div>
                                <Field name="firstname" className={ef.errors.firstname?"form-control is-invalid":"form-control"}></Field>
                                <ErrorMessage name="firstname" component="div" className="invalid-feedback"></ErrorMessage>
                            </div>

                            <div><Field name="lastname"></Field></div>

                            <div><Field name="age"></Field></div>

                            <button disabled={!ef.dirty || !ef.isValid}>Add Employee</button>
                        </Form>
                }
            }
        </Formik>
    </div>
  )
}

export default Employee