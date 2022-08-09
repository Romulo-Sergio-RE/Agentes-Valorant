import { BntPrincipal } from "../bntPrincipal"
import { Container } from "./modalStyle"
import { TiTimes } from 'react-icons/ti';

interface ImodalProps{
    tipoModal?: string;
}

export const Modal:React.FC<ImodalProps> =(props)=>{
    return(
        <>
        {props.tipoModal === "add"?
            <Container>
                <div className="imagem-agente">

                </div>
                <div className="info-agentes">
                    <p>Nome: <span>Fade</span></p>
                    <p>Função: <span>Iniciadora</span></p>
                    <p>Biografia: </p>
                    <p><span>Fade, uma caçadora de recompensas turca, usa o poder dos pesadelos para capturar os segredos dos inimigos. Personificando o próprio terror, ela persegue os alvos e revela seus medos mais profundos para, depois, destruí-los na escuridão.</span></p>
                    <div className="ButtonP">
                        <BntPrincipal onClickBnt={()=>{alert("jjjjjjjj")}}>
                            Add Favoritos
                        </BntPrincipal>
                    </div>
                </div>
                <TiTimes 
                    onClick={()=>{alert("delete")}} 
                    className="icon"  
                    size={32}
                />
            </Container>
            :
            <Container>
                <div className="imagem-agente">

                </div>
                <div className="info-agentes">
                    <p>Nome: <span>Fade</span></p>
                    <p>Função: <span>Iniciadora</span></p>
                    <p>Biografia: </p>
                    <p><span>Fade, uma caçadora de recompensas turca, usa o poder dos pesadelos para capturar os segredos dos inimigos. Personificando o próprio terror, ela persegue os alvos e revela seus medos mais profundos para, depois, destruí-los na escuridão.</span></p>
                    <div className="ButtonP">
                        <BntPrincipal onClickBnt={()=>{alert("jjjjjjjj")}}>
                            Remover Favoritos
                        </BntPrincipal>
                    </div>
                </div>
                <TiTimes 
                    onClick={()=>{alert("delete")}} 
                    className="icon"  
                    size={32}
                />
            </Container>
        }
        </>
    )
}