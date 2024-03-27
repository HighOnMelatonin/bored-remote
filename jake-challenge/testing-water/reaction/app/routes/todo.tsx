import { useEffect, useMemo, useState } from "react";



type array = {
    items: string[]
};

export default function AForm(){
    let [name, getName] = useState('name')
    
    function handleText(FormData) {
        
    }

    return (
        <div>
            <form action={handleText}>
                <input id="name"/>
            </form>
            <p>{displayName}</p>
        </div>
    );
}

export function Listings({ items }: array) {
    let listItems = items.map(item => <li>{item}</li>)
    //map creates a new array populated with the results of calling a provided function on every element in the array
    return (
        <div>
            <h1>A To Do list</h1>
            <ol>{listItems}</ol>
        </div>
    )
}

// export default function ToDo() {
//     //useMemo(calculateValue, dependencies)
//     const visibleTodos = useMemo(
//         () => filterTodos(todos, tab),
//         [todos, tab]
//     )
// }