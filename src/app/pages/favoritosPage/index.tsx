import { useContext } from "react";
import { GridCards } from "../../components/grid";
import { Header } from "../../components/header";
import { AgentsContext } from "../../context/AgentsValorantContext";
import { Container } from "./favoritosStyle";

export const AgentesFavoritos = ()=>{
    const {agentes} = useContext(AgentsContext);
    console.log(agentes)
    return(
        <div>
            <Header tituloBnt="Voltar"/>
            <GridCards gridPage="favoritos"/>
        </div>
    )
}