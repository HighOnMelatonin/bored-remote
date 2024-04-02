import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import MyButton from "./abutton";
//importing button component
import Linkings from "./linkings"
import { i } from "node_modules/vite/dist/node/types.d-AKzkD8vd";


export const meta: MetaFunction = () => {
	return [
		{ title: "Mela's SPA" },
		{ name: "description", content: "Welcome to Remix (SPA Mode)!" },
	];
};


const my = {
	name: 'Rui Anh',
	age: 21,
	education: "Prospective SUTD student",
	github: "https://github.com/HighOnMelatonin"
};

//list of all pages
const pages = [
	"about",
	"todo",
	"chatroom"
];

export default function Index() {
	const listPages = pages.map(page => <li><Linkings file={page} /></li>)
	return (
		<div>
			<h1>Hello</h1>
			<p>I'm {my.name}</p>
			<MyButton />
			<br />
			<ul>{listPages}</ul>
			<br />
		</div>
	);
}

