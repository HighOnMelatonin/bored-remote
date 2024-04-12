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

  const [thingsTodo, setTodo] = useAtom(todo);
  async function addTodo(e) {
    e.preventDefault()
    const form = document.querySelector('#getTodo');
    const formData = new FormData(form);

    thingsTodo.push(formData.get("item"))
    

    const keyString = "item" + thingsTodo.length.toString()
    localStorage.setItem(keyString, formData.get("item"))
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
