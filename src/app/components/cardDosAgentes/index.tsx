import React from "react"
import { Container } from "./cardStyle"

interface IInfoAgentes{
    nome: string,
    funcao: string,
    imagem:string
}

export const CardAgentes:React.FC<IInfoAgentes> = (props)=>{
    return(
        <Container>
            <img src={props.imagem} className="div-imagem"/>
            <div>
                <p className="titulo-nome-funcao">Nome: <span>{props.nome}</span></p>
                <p className="titulo-nome-funcao">Função: <span>{props.funcao}</span></p>
            </div>
        </Container>
    )
}