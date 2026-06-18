import { createContext, useEffect, useState, useContext } from "react";
import React from "react";
import { fetchWithRefresh } from "../api/fetchWithRefresh";
import { BASE_URL } from "../../constants";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userloading, setUserLoading] = useState(true);
  

    useEffect(() => {
        if(user){
            setUserLoading(false);
            return;
        }
        const fetchUser = async () => {
            try {
                const data = await fetchWithRefresh(`${BASE_URL}/api/users/me`);
                setUser(data.data);
            } catch (error) {
                if(error.message=="Session Expired"){
                    navigate("/login");
                }
                setUser(null);
            }
            finally {
                setUserLoading(false);
            }
            
        }
        fetchUser();
    }, [])
    return (
        <UserContext.Provider value={{ user, setUser, userloading }}>
            {children}
        </UserContext.Provider>
    )

}
export function useUser() {
    return useContext(UserContext);
}




