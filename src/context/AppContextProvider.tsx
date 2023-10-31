import { createContext , useReducer , ReactNode } from "react";
import store, { AppState } from "../reducer/store";
import React from "react";
// import { AppAction } from "../reducer/actions";
import reducer from "../reducer/reducer";

export interface AppContextType {
    state : AppState;
    dispatch: React.Dispatch<unknown>;
}

interface AppContextProviderProps {
    children: ReactNode;
}




export const AppContext = createContext<AppContextType>({state: store , dispatch: ()=> null });




export const AppContextProvider :React.FC<AppContextProviderProps> = ({children}) =>{

    const [state , dispatch] = useReducer(reducer , store)

    return(
        <AppContext.Provider value={{state , dispatch} as AppContextType }>
            {children}
        </AppContext.Provider>
    )
}

