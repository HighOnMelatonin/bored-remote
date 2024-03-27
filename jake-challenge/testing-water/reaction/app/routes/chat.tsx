//From https://react.dev/reference/react/useEffect#connecting-to-an-external-system

//This is not a react component, hence no need for capital
export default function createConnection(serverUrl, roomId){
    //A real implementation would connect to the server
    return {
        connect(){
            console.log('Connecting to ${roomId}, room at ${serverUrl}');
        },
        disconnect(){
            console.log('Disconnected from ${roomId}, room at ${serverUrl}');
        }
    };
}
