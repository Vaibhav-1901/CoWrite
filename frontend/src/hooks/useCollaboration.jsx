import { useEffect, useRef, useState } from "react";
import socket from "../socket/socket";
import useNote from "./useNote.js";


const useCollaboration = (sessionId, userId) => {
    const [members, setMembers] = useState([]);//have userId
    const [isConnected, setIsConnected] = useState(false);
    // const isBroadcasting = useRef(false); // prevent  loop // rather use id matching to prevent loop
    const [notes, setNotes] = useNote([]);

    const fetchSessionNotes = async () => {
        try {
            const res = await fetch(`${BASE_URL}/api/notes/${sessionId}/notes`);
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.message || 'Failed to fetch session notes');
            }
            console.log("Session Notes:", data.notes);
            setNotes(data.notes);
        } catch (error) {
            console.error("Error fetching session notes:", error.message);
        }
    }

    useEffect(() => {
        if (!sessionId || !userId) return;
        setIsConnected(true); //marking UI as connected to the session

        socket.on("userJoined", ({ userId }) => {
            setMembers((prevMembers) => [...prevMembers, userId]);
        })
        socket.on("userLeft", ({ userId }) => {
            setMembers((prevMembers) => prevMembers.filter((id) => id !== userId));
        })
        socket.on("user-updated-note", ({ note }) => {
            if (isBroadcasting.current) return;
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