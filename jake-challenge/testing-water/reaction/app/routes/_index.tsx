import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import MyButton from "./abutton.js";
//importing button component

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

export default function Index() {
  return (
    <div>
      <h1>Hello</h1>
      <p>I'm {my.name}</p>
      <MyButton />
      <br />
      <Link to="/about">More about me personally</Link>
    </div>
  );
}
