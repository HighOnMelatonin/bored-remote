import { useMemo } from "react";



type array = {
    items: string[]
};



export default function AForm(){
    function getName(FormData){
        const name = FormData.length("name")
        return (
            <p>Hello {name}</p>
        )
    };

    return (
        <form action={getName}>
            <input name="name"/>
        </form>
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