import type { MetaFunction } from "@remix-run/node";
import Linkings from "./linkings";

export const meta: MetaFunction = () => {
    return [
        { title: "Mela's SPA" },
        { name: "description", content: "Welcome to Remix (SPA Mode)!" },
    ];
};


export default function About() {
    //react components names need to start with a capital letter
    return (
        <div>
            <h1>About</h1>
            <p>Hello there.<br />General Kenobi.</p>
        </div>
    )
    //trying to implement a back to home button
}