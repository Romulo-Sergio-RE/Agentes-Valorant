import styled from "styled-components";
interface ContainerProps {
    backColor:string
}

export const Container =  styled.div<ContainerProps>`
    width: 286px;
    height: 245px;
    background-color: #111111;
    display: block;
    text-align: center;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    border: 1px solid  ${(props)=> props.backColor};
    border-radius: 20px;
    margin: 20px;
    transition: 0.5s all;
    :hover{
        transform: scale(1.05);
        cursor: pointer;
        height: 320px;
        .titulo-nome-funcao{
            visibility: visible;
        }
    }
    .nome-funcao-agente{
        display: block;
        text-align: left;
        margin-left: 40px;
    }
    .div-imagem{
        width: 235px;
        height: 200px;
        margin: 20px;
        background-color: ${(props)=> props.backColor};
        border-radius: 20px;
    }
    .titulo-nome-funcao{
        visibility: hidden;
        color: #ECE8E1;
        font-size: 18px;
        font-weight: 300;
        span{
            text-transform: uppercase;
            font-size: 22px;
            font-weight: 600;       
        }
    }

`;