import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
let usuarioLogado = 'Gill Bates'
const [Contatinho01, setContatinho] = useState('')
const [VetorContatos, setVetor] = useState([])


    return(
        <GlobalContext.Provider value={{
            
            usuarioLogado, 

            Contatinho01, 
            setContatinho,

            VetorContatos,
            setVetor
            
            }}>
            {children}
        </GlobalContext.Provider>
    )
}
