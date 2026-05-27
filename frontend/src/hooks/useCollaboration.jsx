import { useEffect, useRef, useState } from "react";
import socket from "../socket/socket.js";
import useNote from "./useNote.js";


const useCollaboration = (sessionId, userId) => {
    const [members, setMembers] = useState([]);//have userId
    const [isConnected, setIsConnected] = useState(false);
    // const isBroadcasting = useRef(false); // prevent  loop // rather use id matching to prevent loop
    

    useEffect(() => {
        if (!sessionId || !userId) return;
        setIsConnected(true); //marking UI as connected to the session

        socket.on("userJoined", ({ userId }) => {
            setMembers((prevMembers) => [...prevMembers, userId]);
        })
        socket.on("userLeft", ({ userId }) => {
            setMembers((prevMembers) => prevMembers.filter((id) => id !== userId));
        })
        socket.on("user-updated-note", ({ note, updatedBy }) => {
            if (updatedBy === userId) return; //using in place of isBrodcast to prevent loop //CAN ALSO simply use socket.to(sessionId).emit instead of io.emit in the backend to prevent sending the update to the user who made the change
            setNotes((prevNotes) => prevNotes.map((n) => n.id === note.id ? note : n));
        })
        return () => {
            socket.off("userJoined");
            socket.off("userLeft");
            socket.off("user-updated-note");
        };

    }, [sessionId, userId])

    useEffect(() => {
        if (isConnected) {
            fetchSessionNotes();
        }
    }, [isConnected])


}   