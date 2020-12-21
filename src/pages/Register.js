import React from 'react';
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import InputField from '../component/Formik/InputField'

export default () => {
    const handleSubmit = values => console.log(values)
    const schema = Yup.object().shape({
        email: Yup.string().email().required(),
      })

    return (
        <Formik
            initialValues={{ email: '' }}
            onSubmit={handleSubmit}
            validationSchema={schema}
            validateOnChange={false}
            validateOnBlur={false}
        >
            {({ dirty, isSubmitting }) => (
                <Form className="jumbotron">
                    <div className="form-group mx-sm-5 mb-2">
                        {/* <label htmlFor="exampleInputEmail1">Email address</label> */}
                        <InputField
                            name="email"
                            inputProps={{ placeholder: "Enter email" }}
                            labelProps={{ label: "Email address" }}
                            errorProps={{ message: 'Please enter correct email'}}

                        />
                        {/* <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/> */}
                    </div>
                    <div className="form-group mx-sm-5 mb-2">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" placeholder="Password" id="exampleInputPassword1"/>
                    </div>
                    <div className="form-group mx-sm-5 mb-2">
                        <label htmlFor="exampleInputPassword1">Last name</label>
                        <input type="text" className="form-control" placeholder='Last name' id="exampleInputPassword1"/>
                    </div>
                    <div className="form-group mx-sm-5 mb-2">
                        <label htmlFor="exampleInputPassword1">Name</label>
                        <input type="text" className="form-control" placeholder='Name' id="exampleInputPassword1"/>
                    </div>
                    <div className="form-group form-check mx-sm-5 mb-2">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" disabled={!dirty || isSubmitting} className="btn btn-primary mx-sm-5 mb-2">Submit</button>
                </Form>
            )}
        </Formik>
    )
}
