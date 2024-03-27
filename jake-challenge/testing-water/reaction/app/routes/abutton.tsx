import { useState } from "react";
/*
import statement:
with default            : import MyButton from './abutton.tsx';
without default (named) : import { MyButton } from './abutton.tsx';
*/

//file extension should be the same as main file
//export default marks the main function in a file
export default function MyButton() {
    const [count, setCount] = useState(0);
    //[state, set state] = useState(initial state)

    function handleClick() {
        setCount(count + 1)
    }

    if (count == 0) {
        return(
            <button onClick = { handleClick }>
                I'm a button
            </button>
        )
    };

    return (
        <button onClick = { handleClick }>
            Clicked {count} times
        </button>
    )
}