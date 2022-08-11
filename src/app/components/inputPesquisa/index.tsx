import { Container } from "./inputStyle"
import { AiOutlineSearch } from 'react-icons/ai';
import { BntPrincipal } from "../bntPrincipal";
import { ChangeEvent, useContext, useState } from "react";
import { AgentsContext } from "../../context/AgentsValorantContext";
import { CardAgentes } from "../cardDosAgentes";

interface IInputProps{
    pesquisarAgente:string,
    onChange: (novoValor:string)=> void
}
export const InputPesquisa:React.FC<IInputProps> = (props) => {

    const {agentes,setAgentes} = useContext(AgentsContext);
    
    return(
        <Container>
            <div>
                <AiOutlineSearch className="icon" size={24}/>
                <input 
                    type="text" 
                    placeholder="Pesquise um Agente"
                    value={props.pesquisarAgente}
                    onChange={(e)=> props.onChange(e.target.value)}
                />
            </div>            
        </Container>
    )
}