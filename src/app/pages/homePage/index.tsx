import { useContext, useEffect, } from "react";
import { GridCards } from "../../components/grid";
import { Header } from "../../components/header"
import { InputPesquisa } from "../../components/inputPesquisa";
import { AgentsContext } from "../../context/AgentsValorantContext";
import { FavoritosContext } from "../../context/favoritosAgenteContext";
import { Container } from "./homePageStyle"

export const HomePage=()=>{
    
    const {agentes,setAgentes} = useContext(AgentsContext);

    const {favoritos} = useContext(FavoritosContext);

    const url = 'https://valorant-api.com/v1/agents'

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setAgentes(data.data))
    }, []);


    return(
        <div>
            <Header tituloBnt="Meus Favoritos"/>
            <GridCards gridPage=""/>
        </div>
    )
}