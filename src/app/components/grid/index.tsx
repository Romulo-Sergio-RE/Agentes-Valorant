import { useContext } from "react";
import { AgentsContext } from "../../context/AgentsValorantContext";
import { CardAgentes } from "../cardDosAgentes"
import { InputPesquisa } from "../inputPesquisa";
import { Container } from "./gridStyle"

export const GridCards = ()=>{
    const {agentes} = useContext(AgentsContext);

    return(
        <>
            <InputPesquisa />
            <Container>   
                {
                    agentes.map((agente, id)=>{
                        return(
                            <CardAgentes 
                                key={id} 
                                nome={agente.displayName} 
                                funcao={"iniciadora"}
                                imagem={agente.displayIconSmall}
                            />
                        )
                    })
                }
            </Container>
        </>
    )
}