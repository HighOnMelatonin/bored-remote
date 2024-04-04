import type { MetaFunction } from "@remix-run/node";
import { Link, Links } from "@remix-run/react";
import MyButton from "./abutton";
//importing button component
import Linkings from "./linkings"
import { Suspense } from "react";

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
	"chatroom",
	"forms"
];

export default function Index() {
	const listPages = pages.map(page => <li><Linkings file={page} /></li>)
	// I would like to make it not a list
	return (
		<div>
			<h1>Hello</h1>
			<p>I'm {my.name}</p>
			<MyButton />
			<p>Subpages that make use of various hooks and components</p>
			<br />
			<ul>{listPages}</ul>
			<br />
			<Links />
		</div>
	);
}


