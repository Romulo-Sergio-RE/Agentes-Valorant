import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 6.25rem;
    background-color: #111111;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.25rem;
    .logo-valorant{
        color: #ECE8E1;
        text-transform:uppercase;
        font-size: 1.5rem;
        font-weight: 700;
        
    }
    .titulo-agentes{
        border-bottom: 1px solid #FFFFFF;
        h3{
            color: #ECE8E1;
            text-transform:uppercase;
            font-size: 1.125rem;
            font-weight: 300;
            margin-bottom: 0.625rem;
        }
    }
`;