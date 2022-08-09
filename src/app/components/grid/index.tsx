import { CardAgentes } from "../cardDosAgentes"
import { Container } from "./gridStyle"

export const GridCards = ()=>{

    const agentes =[
        {
            id: 1,
            nome:"fade1",
            funcao: "iniciadora1"
        },
        {
            id: 2,
            nome:"fade2",
            funcao: "iniciadora2"
        },
        {
            id: 3,
            nome:"fade3",
            funcao: "iniciadora3"
        },
        {
            id: 4,
            nome:"fade4",
            funcao: "iniciadora4"
        },
        {
            id: 5,
            nome:"fade5",
            funcao: "iniciadora5"
        },
        {
            id: 6,
            nome:"fade6",
            funcao: "iniciadora6"
        },
        {
            id: 7,
            nome:"fade7",
            funcao: "iniciadora7"
        },
        {
            id: 8,
            nome:"fade8",
            funcao: "iniciadora8"
        },
        {
            id: 9,
            nome:"fade9",
            funcao: "iniciadora9"
        },
    ]

    return(
        <Container>
            {
                agentes.map((agente)=>{
                    return(
                        <CardAgentes 
                            key={agente.id} 
                            nome={agente.nome} 
                            funcao={agente.funcao}
                        />
                    )
                })
            }
        </Container>
    )
}