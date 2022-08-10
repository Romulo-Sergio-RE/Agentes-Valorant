import { useContext } from "react";
import { Header } from "../../components/header";
import { AgentsContext } from "../../context/AgentsValorantContext";
import { Container } from "./favoritosStyle";

export const AgentesFavoritos = ()=>{

    const {agentes} = useContext(AgentsContext);
    return(
        <div>
            <Header tituloBnt="Voltar"/>
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