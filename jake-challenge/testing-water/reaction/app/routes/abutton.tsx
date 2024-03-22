import { useState } from "react";

//file extension should be the same as main file
//export default marks the main function in a file
export default function MyButton() {
    const [count, setCount] = useState(0);
    //useState returns [currentState, function to change state]

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