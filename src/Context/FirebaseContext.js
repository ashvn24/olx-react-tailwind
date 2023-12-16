import { createContext } from "react";
import firebase from '../Firebase/Config'


export const firebaseContext = createContext(null)


export default function Firebase({children}){


    
    return(
        <firebaseContext.Provider value={{firebase}}>
            {children}
        </firebaseContext.Provider>
    )
}