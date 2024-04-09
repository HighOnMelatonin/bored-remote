import { useState } from 'react';
import TodoList, { createTodos } from './todolist';
import user from "~/atoms/user";
import { useAtom } from "jotai";

const todos = createTodos();

export default function App() {
  const [tab, setTab] = useState('all');
  const [isDark, setIsDark] = useState(false);

  const [username, setUser] = useAtom(user);
  // dark mode doesn't work
  return (
    <>
      <div>
        <h1>Hello {username}, here's a list of To Dos</h1>
      </div>
      <button onClick={() => setTab('all')}>
        All
      </button>
      <button onClick={() => setTab('active')}>
        Active
      </button>
      <button onClick={() => setTab('completed')}>
        Completed
      </button>
      <br />
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={e => setIsDark(e.target.checked)}
        />
        Dark mode
      </label>
      <hr />
      <TodoList
        todos={todos}
        tab={tab}
        theme={isDark ? 'dark' : 'light'}
      />
    </>
  );
}




// import { useState } from "react";
// import TodoList, { createTodos } from "./todolist";

// const todos = createTodos();

// export default function App() {
//     const [tab, setTab] = useState('all');
//     const [isDark, setIsDark] = useState(false);
//     return (
//         <>
//             <button onClick={()=> setTab('all')}>
//                 All
//             </button>
//             <button onClick={() => setTab('active')}>
//                 Active
//             </button>
//             <button onClick={() => setTab('completed')}>
//                 Completed
//             </button>
//             <br />
//             <label>
//                 <input
//                 type = "checkbox"
//                 checked = {isDark}
//                 onChange = {e => setIsDark(e.target.checked)}
//                 />
//                 Dark mode
//             </label>
//             <hr />
//             <TodoList
//             todos = {todos}
//             tab = {tab}
//             theme = {isDark ? 'dark' : 'light'}
//             />
//         </>
//     )
// }