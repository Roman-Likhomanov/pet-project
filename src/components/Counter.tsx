import {useState} from 'react';
import cls from './Counter.module.scss'

export const Counter = () => {
const [counter, setCounter] = useState(0)
const clickHandler = () => {
    setCounter(counter + 1)
}

    return (
        <div>
            {counter}
         <button className={cls.color} onClick={clickHandler}>Increment</button>
        </div>
    );
};



