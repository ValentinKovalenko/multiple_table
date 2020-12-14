import React, {useState} from 'react';
import Timer from "../component/Timer";


const Test = () => {
     let numberOne = Math.floor((Math.random() * 8) + 2);
    let numberTwo = Math.floor((Math.random() * 8) + 2);
    let multipleResult = numberOne * numberTwo;



    const [counter, setCounter] = useState(24)

    let decrement = () => {
        setCounter(counter - 1)
    }

    let meRef = React.createRef();


   /* const [userResult, setUserResult] = useState('')*/




    return (
        <div className='jumbotron'>

           <h3> Залишилось Виразів:  {counter}</h3>
            <div>
            <Timer/>
            </div>
            <input value={numberOne}/>
            &nbsp;
            <input value={numberTwo}/>
            &nbsp;
            <input ref={meRef}/>
            &nbsp;
            <button onClick={decrement} >Ok</button>
        </div>
    )
   }

export default Test;