import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import MyButton from "./abutton";
//importing button component
import Linkings from "./linkings"


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
	return (
		<div>
			<h1>Hello</h1>
			<p>I'm {my.name}</p>
			<MyButton />
			<br />
			<Linkings file={pages[0]}/>
			<br />
			<Linkings file={pages[1]}/>
			<br />
			<Linkings file={pages[2]}/>
			<br />
		</div>
	);
}

