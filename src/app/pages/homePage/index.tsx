import { useContext, useEffect, } from "react";
import { GridCards } from "../../components/grid";
import { Header } from "../../components/header"
import { ModalErroSucesso } from "../../components/modalErroSucesso";
import { AgentsContext } from "../../context/AgentsValorantContext";
import { Container } from "./homePageStyle"

export const HomePage=()=>{
    
    const {setAgentes} = useContext(AgentsContext);

    
    const url = 'https://valorant-api.com/v1/agents'

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {setAgentes(data.data)})
    }, []);


    return(
        <div>
            <Header tituloBnt="Agentes Favoritos"/>
            <GridCards gridPage=""/>
        </div>
    )
}