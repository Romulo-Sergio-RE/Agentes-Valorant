import { createContext, ReactNode, useState } from "react";

type AgenstsContextProps = {
    children: ReactNode;
}
type ContextProps = { 
    agentes: any[];
    setAgentes: React.Dispatch<React.SetStateAction<any[]>>,
};

const defautValue ={
    agentes: [],
    setAgentes: ()=> void[],
}

export const AgentsContext = createContext<ContextProps>(defautValue);

export const AgentsProvider = ({children}:AgenstsContextProps)=>{
    const[agentes, setAgentes] = useState<any[]>([]);

    return(
        <AgentsContext.Provider value={{agentes, setAgentes }}>
            { children }
        </AgentsContext.Provider>
    )
}