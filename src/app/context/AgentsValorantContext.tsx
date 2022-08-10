import { createContext, ReactNode, useState } from "react";

type AgenstsContextProps = {
    children: ReactNode;
}
type ContextProps = { 
    agentes: any[];
    setAgentes: React.Dispatch<React.SetStateAction<any[]>>,
};

const teste1 ={
    agentes: [],
    setAgentes: ()=> void[],
}

export const AgentsContext = createContext<ContextProps>(teste1);

export const AgentsProvider = ({children}:AgenstsContextProps)=>{
    const[agentes, setAgentes] = useState<any[]>([]);

    return(
        <AgentsContext.Provider value={{agentes, setAgentes }}>
            { children }
        </AgentsContext.Provider>
    )
}