import { createContext , useReducer , ReactNode } from "react";
import store, { AppState } from "../reducer/store";
import React from "react";
import { AppAction } from "../reducer/actions";
import reducer from "../reducer/reducer";

interface AppContextType {
    state : AppState;
    dispatch: React.Dispatch<AppAction>;
}

interface AppContextProviderProps {
    children: ReactNode;
}




export const AppContext = createContext<AppContextType | undefined>(undefined);



export const AppContextProvider :React.FC<AppContextProviderProps> = ({children}) =>{

    const [state , dispatch] = useReducer(reducer , store)

    return(
        <AppContext.Provider value={{state , dispatch}}>
            {children}
        </AppContext.Provider>
    )
}

