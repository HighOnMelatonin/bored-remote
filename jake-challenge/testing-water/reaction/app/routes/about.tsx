import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
        { title: "Mela's SPA" },
        { name: "description", content: "Welcome to Remix (SPA Mode)!" },
    ];
};


export default function About() {
    return (
        <div>
            <h1>About</h1>
            <p>Hello there.<br />General Kenobi.</p>
        </div>
    )
}