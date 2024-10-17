import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
let usuarioLogado = 'Gill Bates'
const [MusicaGlobalSkate, setSkate] = useState('Só os skates sabem - Charlie Brown Jr.')


    return(
        <GlobalContext.Provider value={{usuarioLogado, MusicaGlobalSkate, setSkate}}>
            {children}
        </GlobalContext.Provider>
    )
}
