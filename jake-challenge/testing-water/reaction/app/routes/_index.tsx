import type { MetaFunction } from "@remix-run/node";
import MyButton from "../components/abutton";
import Linkings from "../components/linkings";
import {useAtom} from "jotai";
import user from "~/atoms/user";

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

	const [username, setUser] = useAtom(user);

	async function handleUser(e) {
		e.preventDefault()

		const form = document.querySelector('#nameForm')
		const formData = new FormData(form);

		console.log(formData.get("name"))
		setUser(formData.get("name"))
	}

	return (
		<>
			<div>
				<h1>Hello {username}</h1>
				<p>I'm {my.name}</p>

				<form encType="multipart/form-data" id="nameForm" method="post" onSubmit={handleUser}>
					<input type="text" name="name" placeholder="And you are?"/>
					<button type="submit">Submit</button>
				</form>

				<MyButton />
			</div>
			<br />
			<div>
				<p>Subpages that make use of various hooks and components</p>
				<br />
				<ul>{listPages}</ul>
				<br />
			</div>
		</>
	);
}


