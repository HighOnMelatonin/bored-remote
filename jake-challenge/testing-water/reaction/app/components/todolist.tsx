// This file manages the todo items

import { useAtom } from "jotai";
import { useMemo } from "react";
import todo from '~/atoms/todo';

export default function TodoList({ todos, tab, theme }) {
    const [thingsTodo, setTodo] = useAtom(todo)
    // array items need a key
    // https://react.dev/learn/rendering-lists#where-to-get-your-key
    const visibleTodos = useMemo(
        () => filterTodos(thingsTodo, tab),
        [todos, tab]
    );
    //const cachedValue = useMemo(calculateValue, dependencies  )
    
    return (
        <div>
            <ol>
                {thingsTodo.map(thing => (
                    <li key={thing}>
                        {thing}
                    </li>
                ))}
            </ol>
        </div>
    )
}

function filterTodos(todos, tab) {
    console.log('Filtering ' + todos.length + ' todos for ' + tab + ' tab.');
    console.log(todos[0])
    return todos.filter(todo => {
        if (tab === 'all'){
            return true;
        } else if (tab === 'active'){
            return !todo.completed;
        } else {
            return todo.completed;
        }
    });
}
