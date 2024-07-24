import { createContext } from "react";

export const DesignContext = createContext()

export const DesignContextProvider = ({children}) => {
    return (
        <DesignContext.Provider value={{
            name: 'Something'
        }}>
            {children}
        </DesignContext.Provider>
    )
}