import {io} from "socket.io-client";

const socket=io(
    "http://localhost:5000",
    {
        withCredentials:true,
        autoConnect:false, 
    }
) // making a connection to the server

export default socket;