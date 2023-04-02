import { useState } from "react";
import { createContext } from "react";

export const ProdContext = createContext({})

// Composant
export default function ProdContextProvider({children}) {
    const [myProds, setMyProds] = useState([])

    return <ProdContextProvider value={{myProds, setMyProds}}>
            {children}
    </ProdContextProvider>
}