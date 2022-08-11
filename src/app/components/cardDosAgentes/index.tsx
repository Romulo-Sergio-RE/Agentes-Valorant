import React, { useContext, useState } from "react"
import { FavoritosContext } from "../../context/favoritosAgenteContext"
import { Modal } from "../modalInfoAgente"
import { Container, ContainerTeste } from "./cardStyle"

interface IInfoAgentes{
    nome: string,
    funcao: string,
    imagem: string,
    biografia: string,
    imagemModal: string,
    tipoModal: string
}

export const CardAgentes:React.FC<IInfoAgentes> = (props)=>{
    
    const[isModalAberto, setIsModalAberto] = useState(false)
    
    return(
        <>
        {isModalAberto?
            <Modal 
                tipoModal={props.tipoModal}
                onClose={() => { setIsModalAberto(false)} } 
                nomeAgente={props.nome}
                biografiaAgente={props.biografia}
                imagemAgenteCard={props.imagem}
                imagemAgenteModal={props.imagemModal}
            />
            : 
            null
        }
        <Container onClick={() => setIsModalAberto(true)} className="a">
            <img src={props.imagem} className="div-imagem" alt={"imagem-do-agente-card"}/>
            <div>
                <p className="titulo-nome-funcao">Nome: <span>{props.nome}</span></p>
                <p className="titulo-nome-funcao">Função: <span>{props.funcao}</span></p>
            </div>
        </Container>
        </>
    )
}