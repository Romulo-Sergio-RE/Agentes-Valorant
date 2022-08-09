import React from "react"
import { Container } from "./cardStyle"

interface IInfoAgentes{
    nome: string,
    funcao: string,
}

export const CardAgentes:React.FC<IInfoAgentes> = (props)=>{
    return(
        <Container>
            <div className="div-imagem">

            </div>

            <div>
                <p className="titulo-nome-funcao">Nome: <span>{props.nome}</span></p>
                <p className="titulo-nome-funcao">Função: <span>{props.funcao}</span></p>
            </div>
        </Container>
    )
}