import React from 'react';
import * as yup from "yup";
import {Formik} from "formik";

const Login = () => {

    const validationsSchema = yup.object().shape({
        email: yup.string().email('Введіть правильний email').required('Поле не повинно бути пустим'),
        password: yup.string().typeError('Повинні бути букви').required('Поле не повинно бути пустим').min(8, 'пароль повинен бути більший 8 символів'),
    })

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
                      handleSubmit,
                      dirty
                  }) => (
                    <form className='jumbotron'>
                        <div className="form-group mx-sm-5 mb-2">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type='email'
                                   className="form-control"
                                   placeholder="Enter email"
                                /*id="exampleInputEmail1"*/
                                /*aria-describedby="emailHelp"*/
                                   name='email'
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.email}
                            />
                            {touched.email && errors.email && <p className='text-danger'>{errors.email}</p>}
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
                            {touched.password && errors.password && <p className='text-danger'>{errors.password}</p>}
                        </div>

                        <div className="form-group form-check mx-sm-5 mb-2">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
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

export default Login;
