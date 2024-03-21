import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Mela's SPA" },
    { name: "description", content: "Welcome to Remix (SPA Mode)!" },
  ];
};

const my = {
  name: 'Rui Anh',
  age: 21,
  education: "Prospective SUTD student"
}

function MyButton() {
  const [count, setCount] = useState(0);
  //useState returns [current state, function to change state]
  function handleClick() {
    setCount(count + 1)
  }

  if (count == 0) {
    return (
      //handleClick has no (), react will call the event handler when the event occurs
      <button onClick={handleClick}>
        I'm a button
      </button>
    );
  }
  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  )
}

export default function Index() {
  return (
    <div>
      <h1>Hello</h1>
      <p>I'm {my.name}</p>
      <MyButton />
      <br />
      <Link to="/about">About</Link>
    </div>
  );
}
