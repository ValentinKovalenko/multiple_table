import React, {useState} from 'react';
import {Form, Formik} from "formik";
import * as yup from "yup";


const Test = () => {
    const validationsSchema = yup.object().shape({
        Result: yup.number()
    })
    let d = 0.5
    let numberOne = Math.floor((Math.random() * 8) + 2)
    let numberTwo = Math.floor((Math.random() * 8) + 2)
    let myResult = numberOne * numberTwo;
    const [userResult, setUserResult] = useState(0)
    const [counter, setCounter] = useState(24)


    const onClick = (Result) => {
        console.log(Result)
        if (myResult == Result) {
            setUserResult(userResult + d)
            console.log(userResult)
        }
        setCounter(counter - 1)
        if (!counter) {
            console.log(userResult)
        }
    }

    return (
        <Formik
            initialValues={{
                numberOne: 'numberOne',
                numberTwo: 'numberTwo',
                Result: '',
            }}
            onSubmit={(values, action) => {
                action.resetForm({})
                onClick(values.Result)
            }}
            validationSchema={validationsSchema}
        >
            {({
                  values,
                  handleChange,
                  handleSubmit,
              }) => (
                <Form>
                    <div className='jumbotron'>
                        <h3 className='test'> Залишилось Виразів: {counter}</h3>
                        <div className='test1'>


                            <input value={numberOne}/>
                            &nbsp;
                            <input value={numberTwo}/>
                            &nbsp;
                            <input type='text'
                                   name='Result'
                                   onChange={handleChange}
                                   value={values.Result}
                                   onSubmit={handleSubmit}
                            />
                            &nbsp;
                            <button onSubmit={handleSubmit} disabled={counter === 0}>Ok</button>
                        </div>
                        <div className='test1'>Ваша оцінта: {userResult}</div>
                    </div>
                </Form>
            )}
        </Formik>

    )
}

export default Test;