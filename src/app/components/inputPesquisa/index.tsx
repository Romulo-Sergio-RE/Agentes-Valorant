import { Container } from "./inputStyle"
import { AiOutlineSearch } from 'react-icons/ai';
import { BntPrincipal } from "../bntPrincipal";

export const InputPesquisa =()=>{
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