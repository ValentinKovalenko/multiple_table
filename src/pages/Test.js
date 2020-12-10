import React, {useState} from 'react';
import Timer from "../component/Timer";


const Test = () => {
    let result = '';
    let numberOne = Math.floor((Math.random() * 8) + 2);
    let numberTwo = Math.floor((Math.random() * 8) + 2);
    let multipleResult = numberOne * numberTwo;

    const [counter, setCounter] = useState(24)

    function decrement() {
        setCounter(counter - 1)
    }


    return (
        <div className='jumbotron'>

           <h3> Залишилось Виразів:  {counter}</h3>
            <div className='' >
            <Timer/>
            </div>
                        <input value={numberOne}/>
            &nbsp;
            <input value={numberTwo}/>
            &nbsp;
            <input value={result}/>
            &nbsp;
            <button onClick={decrement}>Ok</button>
        </div>
    )
}
export default Test;