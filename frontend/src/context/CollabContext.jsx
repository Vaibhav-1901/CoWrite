import { createContext, useEffect, useState, useContext } from "react";
import React from "react";

const CollabContext=createContext();

export const CollabProvider=({children})=>{
    const [sessionId,setSessionId]=useState(null);
    const [members,setMembers]=useState([]);
    return (
        <CollabContext.Provider value={{sessionId,setSessionId,members,setMembers}}>
            {children}
        </CollabContext.Provider>
    )
}

export function useCollab(){
    return useContext(CollabContext);
}


