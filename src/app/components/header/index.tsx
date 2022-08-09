import { BntPrincipal } from "../bntPrincipal";
import { Container } from "./HeaderStyle";
import { BsArrowLeft } from 'react-icons/bs'
import { useNavigate } from "react-router-dom";

interface HeaderProps{
    tituloBnt: string,
}

export const Header:React.FC<HeaderProps> =(props)=>{
    const navigate = useNavigate()

    const BntMeusFavoritos = ()=>{
        navigate("/favoritos")
    }
    const BntVoltarHomePage = ()=>{
        navigate("/")
    }
    return(
        <Container>
            <div className="logo-valorant">
                <h3>Valorant</h3>
            </div>
            <div className="titulo-agentes">
                <h3>Agentes</h3>
            </div>
            {props.tituloBnt.toLowerCase() === "voltar" ?
                <BntPrincipal onClickBnt={BntVoltarHomePage}>
                    <BsArrowLeft style={{marginRight: 10}}/>
                    {props.tituloBnt}
                </BntPrincipal>
                :
                <BntPrincipal onClickBnt={BntMeusFavoritos}>
                    {props.tituloBnt}
                </BntPrincipal>
            }
        </Container>
    )
}