import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: 40px;
    input{
        width: 433px;
        height: 55px;
        padding-left: 55px;
        margin-right: 15px;
        border-radius: 10px;
        background-color: #ECE8E1;
        border: 2px solid rgba(17, 17, 17, 0.8);
        font-size: 18px;
        font-weight: 300;
        font-family: 'Oxanium',monospace;
        color: #111111;
        ::placeholder{
            color: #111111;
        }
        :focus{
            box-shadow: 0 0 0 0;
            outline: 0;
        }
    }
    .icon{
        position: absolute;
        margin-top: 15.5px;
        margin-left: 15px;
    }
`;