import { useState } from "react";
import React from "react";

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
    const [isOwner, setIsOwner] = useState(false);
    const [userId, setUserId] = useState();

    return (
        <UserContext.Provider
            value={{
                userId,
                isOwner,
                setIsOwner,
                setUserId
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider };