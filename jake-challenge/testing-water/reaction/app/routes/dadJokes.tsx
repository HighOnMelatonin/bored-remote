
export default function ShowJoke() {
    async function getJoke(e) {
        // Get a random dad joke
        // fetch returns a promise that resolves with a response object
        const response = await fetch("https://icanhazdadjokes.com/",{
            method: "get"
        }
        );
        const joke = await response.json();
        console.log(joke)

    }

    return (
        <div>
            <button onClick={getJoke}>Fetch a dad joke</button>
            <p></p>
        </div>
    )
}