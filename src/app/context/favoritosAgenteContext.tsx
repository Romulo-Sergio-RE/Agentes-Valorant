import { createContext, ReactNode, useState } from "react";

type FavoritosContextProps = {
    children: ReactNode;
}
type ContextProps = { 
    favoritos: any[];
    setfavoritos: React.Dispatch<React.SetStateAction<any[]>>,
};

const defautValue ={
    favoritos: [],
    setfavoritos: ()=> void[],
}

export const FavoritosContext = createContext<ContextProps>(defautValue);

export const FavoritosProvider = ({children}:FavoritosContextProps)=>{
    const[favoritos, setfavoritos] = useState<any[]>([]);

    return(
        <FavoritosContext.Provider value={{favoritos, setfavoritos }}>
            { children }
        </FavoritosContext.Provider>
    )
}