import { useEffect, useState } from "react";
import createConnection from "./chat";

function ChatRoom({ roomId }){
    const [serverUrl, setServerUrl] = useState('https://localhost:5173/');

    useEffect(() => {
        const connection = createConnection(serverUrl, roomId);
        connection.connect();
        return () => {
            connection.disconnect();
        };
    }, [roomId, serverUrl]);

    return (
        <>
            <label>
                Server url:{' '}
                <input
                value = {serverUrl}
                onChange = {e => setServerUrl(e.target.value)}
                />
            </label>
            <h1>Welcome to {roomId} room</h1>
        </>
    )
    // <Fragment> (<>) allows for grouping of elements without needing a wrapper
    // groups eleements tgt in situations where you need a singel element
}

export default function App(){
    const [roomId, setRoomId] = useState('general');
    const [show, setShow] = useState(false);

    return (
        <>
            <label>
                Choose the chat room: {' '}
                <select
                value = {roomId}
                onChange = {e => setRoomId(e.target.value)}
                >
                    <option value = "general">general</option>
                    <option value = "spam">spam</option>
                    <option value = "important">important</option>
                </select>
            </label>
            <button onClick={() => setShow(!show)}>
                {show ? 'Close chat' : 'Open chat'}
            </button>
            { show && <hr />}
            { show && <ChatRoom roomId={roomId} /> }
        </>
    )
}