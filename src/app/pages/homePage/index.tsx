import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../../components/header"
import { Modal } from "../../components/modal"
import { Container } from "./homePageStyle"

export const HomePage=()=>{
    const[agents,setAgents]=useState<any[]>([]);

    const url = 'https://valorant-api.com/v1/agents'

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setAgents(data.data))
            
    }, []);

    console.log(agents)
    return(
        <div>
            <Header tituloBnt="Meus Favoritos"/>
            {
                agents.map((val,id)=>{
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