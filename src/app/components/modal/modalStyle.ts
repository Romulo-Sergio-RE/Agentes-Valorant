import styled from "styled-components";

export const ContainerModal = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: rgba(0,0,0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
`;
export const Container = styled.div`
    width: 700px;
    height: 600px;
    background-color: #111111;
    margin: 30px;
    border-radius: 20px;
    display: flex;
    .imagem-agente{
        width: 400px;
        height: 600px;
        background-color: #7E7E7E;
        border-radius: 20px;
    }
    .info-agentes{
        width: 250px;
        height: 600px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 20px;
        margin-top: 20px;
        color: #FFFFFF;
        p{
            margin: 5px 0;
            font-size: 18px;
            font-weight: 400;
        }
        span{
            text-transform: uppercase;
            font-size: 20px;
            font-weight: 600;
        }
        .ButtonP{
            display: flex;
            justify-content:center ;
            margin-top: 30px;
        }
    }
    .icon{
        margin-top: 20px;
        color:#FF4655;
        cursor: pointer;
    }
`;
