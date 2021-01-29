import React from 'react';
import {Form, Formik,} from 'formik';
import * as yup from 'yup';
import {useHttp} from "../hooks/http.hook";

const Register = () => {
    const validationsSchema = yup.object().shape({
        name: yup.string().typeError('Повинні бути букви').required('Поле не повинно бути пустим'),
        email: yup.string().email('Введіть правильний email').required('Поле не повинно бути пустим'),
        password: yup.string().typeError('Повинні бути букви').required('Поле не повинно бути пустим').min(8, 'пароль повинен бути більший 8 символів'),
        lastName: yup.string().typeError('Повинні бути букви').required('Поле не повинно бути пустим')
    })
    let values;
    /* const registerHandler = async () =>{
         try {
             const data = await request('/api/auth/register', 'POST',values)
             console.log('Data', data)
         }catch (e){}
     }*/

    return (
        <div>
            <Formik
                initialValues={{
                    name: '',
                    lastName: '',
                    email: '',
                    password: ''
                }}
                validateOnBlur
                onSubmit={(values) => {
                    console.log(values)
                    values = values;
                }}
                validationSchema={validationsSchema}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      isValid,
                      handleSubmit, dirty
                  }) => (
                    <form className='jumbotron'>
                        <div className="form-group mx-sm-5 mb-2">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type='email'
                                   className="form-control"
                                   placeholder="Enter email"
                                   name='email'
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.email}
                            />
                            {touched.email && errors.email && <p>{errors.email}</p>}
                        </div>

                        <div className="form-group mx-sm-5 mb-2">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password"
                                   className="form-control"
                                   placeholder="Password"
                                   id="exampleInputPassword1"
                                   name='password'
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.password}
                            />
                            {touched.password && errors.password && <p>{errors.password}</p>}
                        </div>
                        <div className="form-group mx-sm-5 mb-2">
                            <label htmlFor="exampleInputPassword1">Last name</label>
                            <input type="text"
                                   className="form-control"
                                   placeholder='Last name'
                                   id="exampleInputPassword1"
                                   name='lastName'
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.lastName}
                            />
                            {touched.lastName && errors.lastName && <p>{errors.lastName}</p>}
                        </div>
                        <div className="form-group mx-sm-5 mb-2">
                            <label htmlFor="exampleInputPassword1">Name</label>
                            <input type="text"
                                   className="form-control"
                                   placeholder='Name'
                                   id="exampleInputPassword1"
                                   name='name'
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.name}
                            />
                            {touched.name && errors.name && <p>{errors.name}</p>}
                        </div>

                        <button type="submit"
                                className="btn btn-primary mx-sm-5 mb-2"
                                disabled={!isValid && !dirty}
                                onClick={handleSubmit}
                        >Submit
                        </button>
                    </form>


                )}

            </Formik>
        </div>
    )

}

export default Register;