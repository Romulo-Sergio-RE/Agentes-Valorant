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
                agente.displayName.toLocaleLowerCase().includes(pesquisar.toLocaleLowerCase()));

    return(
        <>
            {props.gridPage.toLocaleLowerCase() === "favoritos"?
                <Container>   
                    {   
                    
                        favoritos
                            .filter((agentes)=> agentes.uuid !== "ded3520f-4264-bfed-162d-b080e2abccf9")
                            .map((favorito)=>{
                            return(                        
                                <div>
                                    <CardAgentes 
                                        key={favorito.nomeAgente} 
                                        nome={favorito.nomeAgente} 
                                        funcao={favorito.funcao}
                                        biografia={favorito.biografiaAgente}
                                        imagem={favorito.imagemAgenteCard}
                                        imagemModal={favorito.imagemAgenteModal}
                                        tipoModal={""}
                                        corImageDeFundo={favoritos?"#FF4655":"#ECE8E1"}
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
                            .filter((agentes)=> agentes.uuid !== "ded3520f-4264-bfed-162d-b080e2abccf9")
                            .map((agente)=>{
                                return(
                                    <CardAgentes
                                        key={agente.displayName}
                                        nome={agente.displayName}
                                        funcao={agente.role.displayName}
                                        biografia={agente.description}
                                        imagem={agente.displayIconSmall}
                                        imagemModal={agente.fullPortrait} 
                                        tipoModal={"add"}
                                        corImageDeFundo={favoritos.find((a)=>a.nomeAgente === agente.displayName)?"#FF4655":"#ECE8E1"}
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