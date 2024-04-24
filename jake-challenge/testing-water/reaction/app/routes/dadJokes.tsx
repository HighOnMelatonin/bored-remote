import { useState } from "react";

export default function DadJokes() {
    const [joke, setJoke] = useState("");

    async function getJoke(e) {
        // Get a random dad joke
        // fetch returns a promise that resolves with a response object
        const response = await fetch("https://icanhazdadjoke.com/",{
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        }
        );

        console.log(response);
        setJoke((await response.json()).joke);
        console.log(joke)
    }

    return (
        <div>
            <button onClick={getJoke}>Fetch a dad joke</button>
            <br />
            <p>{ joke ? joke : "press fetch" }</p>
        </div>
    )
}