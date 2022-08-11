import React from "react";
import { useContext, useState } from "react";
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
                    <InputPesquisa />
                    <Container>
                        {agentes.map((agente) => {
                            return (
                                <div>
                                    <CardAgentes
                                        key={agente.uuid}
                                        nome={agente.displayName}
                                        funcao={"iniciadora"}
                                        biografia={agente.description}
                                        imagem={agente.displayIconSmall}
                                        imagemModal={agente.fullPortrait} 
                                        tipoModal={"add"}
                                    />
                                </div>
                            );
                        })}
                    </Container>
                </div>
            }
        </>
    )
}