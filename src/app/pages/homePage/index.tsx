import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/header"
import { Modal } from "../../components/modal"
import { AgentsContext } from "../../context/AgentsValorantContext";
import { Container } from "./homePageStyle"

export const HomePage=()=>{
    
    const {agentes,setAgentes} = useContext(AgentsContext);

    const url = 'https://valorant-api.com/v1/agents'
    
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setAgentes(data.data))
    }, []);

    console.log(agentes)

    return(
        <div>
            <Header tituloBnt="Meus Favoritos"/>
            {

                agentes.map((val,id)=>{
                    return(
                        <div key={id}>
                            <p>{val.displayName}</p>
                            <img src={val.fullPortraitV2} style={{width:50,height:50}} alt=""/>
                        </div>
                    )
                })
            }
        </div>
    )
}