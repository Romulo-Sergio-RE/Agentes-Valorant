import { Container } from "./inputStyle"
import { AiOutlineSearch } from 'react-icons/ai';
import { BntPrincipal } from "../bntPrincipal";
import { useContext } from "react";
import { AgentsContext } from "../../context/AgentsValorantContext";
import { CardAgentes } from "../cardDosAgentes";

export const InputPesquisa = () => {

    const {agentes} = useContext(AgentsContext);

    return(
        <Container>
            <div>
                <AiOutlineSearch className="icon" size={24}/>
                <input 
                    type="text" 
                    placeholder="Pesquise um Agente"
                />
            </div>
            <BntPrincipal onClickBnt={()=>{alert("asdsad")}}>
                Pesquisar
            </BntPrincipal>
            
        </Container>
    )
}