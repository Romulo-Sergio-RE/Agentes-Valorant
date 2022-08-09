import styled from "styled-components";

export const Container =  styled.div`
    width: 286px;
    height: 355px;
    background-color: #111111;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    border-radius: 20px;
    margin: 20px;
    .div-imagem{
        width: 235px;
        height: 197px;
        background-color: #D9D9D9;
        border-radius: 20px;
    }
    .titulo-nome-funcao{
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