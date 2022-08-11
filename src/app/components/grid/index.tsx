import React, { useState } from "react";
import { useContext } from "react";
import { AgentsContext } from "../../context/AgentsValorantContext";
import { FavoritosContext } from "../../context/favoritosAgenteContext";
import { CardAgentes } from "../cardDosAgentes"
import { InputPesquisa } from "../inputPesquisa";
import { Container } from "./gridStyle"

interface IGridProps{
    gridPage: string
}

export const GridCards: React.FC<IGridProps> = (props)=>{
    const {agentes} = useContext(AgentsContext);
    const {favoritos} = useContext(FavoritosContext)
    const [pesquisar, setPesquisar] = useState("")

    const AgentesFiltrados = 
        agentes
            .filter((agente)=> 
                agente.displayName.toLocaleLowerCase().includes(pesquisar.toLocaleLowerCase()))

    console.log(agentes)
    return(
        <>
            {props.gridPage.toLocaleLowerCase() === "favoritos"?
                <Container>   
                    {
                        favoritos.map((favorito)=>{
                            return(                        
                                <div>
                                    <CardAgentes 
                                        key={favorito.nomeAgente} 
                                        nome={favorito.nomeAgente} 
                                        funcao={"iniciadora"}
                                        biografia={favorito.biografiaAgente}
                                        imagem={favorito.imagemAgenteCard}
                                        imagemModal={favorito.imagemAgenteModal}
                                        tipoModal={""}
                                    />
                                </div>
                            )
                        })
                    }
                </Container>
                :
                <div>
                    <InputPesquisa 
                        pesquisarAgente={pesquisar} 
                        onChange={(evento) =>setPesquisar(evento)}
                    />
                    <Container>
                        {AgentesFiltrados
                            .filter((agentes)=> agentes.uuid !== "320b2a48-4d9b-a075-30f1-1f93a9b638fa")
                            .map((agente)=>{
                                return(
                                    <CardAgentes
                                        key={agente.displayNam}
                                        nome={agente.displayName}
                                        funcao={"iniciadora"}
                                        biografia={agente.description}
                                        imagem={agente.displayIconSmall}
                                        imagemModal={agente.fullPortrait} 
                                        tipoModal={"add"}
                                    />
                                )
                            })
                        
                        }
                    </Container>
                </div>
            }
        </>
    )
}