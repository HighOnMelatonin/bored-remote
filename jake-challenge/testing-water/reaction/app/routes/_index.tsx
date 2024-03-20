import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

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
  function handleClick() {
    alert("stop, it tickles")
  }
  return (
    //handleClick has no (), react will call the event handler when the event occurs
    <button onClick={handleClick}>
      I'm a button
    </button>
  );
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
