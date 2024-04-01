import { useMemo } from "react";

export default function TodoList({ todos, tab, theme }) {
    const visibleTodos = useMemo(
        () => filterTodos(todos, tab),
        [todos, tab]
    );
    //const cachedValue = useMemo(calculateValue, dependencies  )
    
    return (
        <div className={theme}>
            <p><b>To Do</b></p>
            <ol>
                {visibleTodos.map(todo => (
                    <li key={todo.id}>
                        {todo.completed ?
                        <s>{todo.text}</s> :
                        todo.text
                        }
                    </li>
                ))}
            </ol>
        </div>
    )
}

export function createTodos() {
    const todos = [];
    for (let i = 0; i < 20; i++){
        todos.push({
            id: i,
            text: "Todo " + (i + 1),
            completed: false
        })
    }
    return todos;
}

function filterTodos(todos, tab) {
    console.log('Filtering ' + todos.length + ' todos for ' + tab + ' tab.');

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
