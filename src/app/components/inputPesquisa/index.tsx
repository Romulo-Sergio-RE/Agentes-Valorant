import { Container } from "./inputStyle"
import { AiOutlineSearch } from 'react-icons/ai';
import { BntPrincipal } from "../bntPrincipal";
import { useContext, useState } from "react";
import { AgentsContext } from "../../context/AgentsValorantContext";
import { CardAgentes } from "../cardDosAgentes";

export const InputPesquisa =()=>{

    const {agentes} = useContext(AgentsContext);

    const[pesquisarAgente, setPesquisarAgente] = useState("")

    console.log(pesquisarAgente)
    console.log(agentes)
    const AgentesPesquisador = agentes
        .filter((agente)=> {
            agente.displayName.toLocaleLowerCase().includes(pesquisarAgente.toLocaleLowerCase())
        })

    return(
        <Container>
            <div>
                <AiOutlineSearch className="icon" size={24}/>
                <input 
                    type="text" 
                    placeholder="Pesquise um Agente"
                    value={pesquisarAgente}
                    onChange={(event)=> setPesquisarAgente(event.target.value)}
                />
            </div>
            <BntPrincipal onClickBnt={()=>{alert("asdsad")}}>
                Pesquisar
            </BntPrincipal>
            
        </Container>
    )
}