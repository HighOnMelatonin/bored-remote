// This file manages the displaying of the todolist

import { useState } from 'react';
import TodoList from '../components/todolist';
import user from "~/atoms/user";
import { useAtom } from "jotai";
import todo from "~/atoms/todo";

// No jotai

export default function App() {
  const [tab, setTab] = useState('all');
  const [isDark, setIsDark] = useState(false);
  const [username, setUser] = useAtom(user);


  function populateArray() {
    let index = 0;
    let keyString = "item" + index.toString();
    let thingsTodo = []
    let thing = localStorage.getItem(keyString)
    while (thing != undefined) {
      thingsTodo.push({id: keyString, item: thing});
      index += 1;
      keyString = "item" + index.toString();
      thing = localStorage.getItem(keyString);

    }
    return thingsTodo
  }

  const thingsTodo = populateArray();
  // const [thingsTodo, setTodo] = useAtom(todo);
  async function addTodo(e) {
    e.preventDefault()
    const form = document.querySelector('#getTodo');
    const formData = new FormData(form);

    // thingsTodo.push(formData.get("item"))

    const keyString = "item" + thingsTodo.length.toString();
    localStorage.setItem(keyString, formData.get("item"));
  }

  // dark mode doesn't work
  return (
    <>
      <div>
        <h1>Hello {username} here's a list of To Dos</h1>
      </div>
      <div class="grid">
        <button onClick={() => setTab('all')}>
          All
        </button>
        <button onClick={() => setTab('active')}>
          Active
        </button>
        <button onClick={() => setTab('completed')}>
          Completed
        </button>

      </div>
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
        todos={thingsTodo}
        tab={tab}
        theme={isDark ? 'dark' : 'light'}
      />
      <form id="getTodo" method="post" onSubmit={addTodo}>
        <input type="text" name="item" placeholder="To Do" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
