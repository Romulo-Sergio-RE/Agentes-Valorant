import { BntPrincipal } from "../bntPrincipal"
import { Container,ContainerModal } from "./modalStyle"
import { TiTimes } from 'react-icons/ti';
import { useContext, useEffect, useState } from "react";
import { FavoritosContext } from "../../context/favoritosAgenteContext";
import { ModalErroSucesso } from "../modalErroSucesso";

type ImodalProps={
    tipoModal?: string,
    onClose?: ()=> void,
    nomeAgente: string,
    biografiaAgente: string,
    imagemAgenteModal: string,
    imagemAgenteCard: string,
    funcao: string
}

export const Modal:React.FC<ImodalProps> =(props)=>{

    const {favoritos, setfavoritos} = useContext(FavoritosContext);

    const addFavoritosAgentes = ()=>{
        if(favoritos.find((a)=> a.nomeAgente === props.nomeAgente)){
            alert("esse agente ja foi adicionado")
        }else{
            setfavoritos([...favoritos, props])
            alert("esse agente foi adicionado com sucesso")
        }
    }

    const removerFavoritosAgentes = ()=>{
        setfavoritos(favoritos.filter((agente)=> agente.nomeAgente !== props.nomeAgente))
        alert("esse agente foi removido com sucesso")
    }
    console.log(favoritos)
    return(
        <ContainerModal>
            {props.tipoModal === "add"?
                <Container >
                    <img 
                        src={props.imagemAgenteModal} 
                        className="imagem-agente" 
                        alt={"imagem-do-agente-card"}
                    />
                    <div className="info-agentes">
                        <p>Nome: <span>{props.nomeAgente}</span></p>
                        <p>Função: <span>{props.funcao}</span></p>
                        <p>Biografia: </p>
                        <p><span>{props.biografiaAgente}</span></p>
                        <div className="ButtonP" onClick={props.onClose} >
                            <BntPrincipal onClickBnt={addFavoritosAgentes}>
                                <div onClick={props.onClose}></div>
                                Add Favoritos
                            </BntPrincipal>
                        </div>
                    </div>
                    <TiTimes 
                        onClick={props.onClose} 
                        className="icon"  
                        size={32}
                    />
                </Container>
                :
                <Container>
                    <img 
                        src={props.imagemAgenteModal} 
                        className="imagem-agente" 
                        alt={"imagem-do-agente-card"}
                    />
                    <div className="info-agentes">
                        <p>Nome: <span>{props.nomeAgente}</span></p>
                        <p>Função: <span>{props.funcao}</span></p>
                        <p>Biografia: </p>
                        <p><span>{props.biografiaAgente}</span></p>
                        <div className="ButtonP">
                            <BntPrincipal onClickBnt={removerFavoritosAgentes}>
                                Remover Favoritos
                            </BntPrincipal>
                        </div>
                    </div>
                    <TiTimes 
                        onClick={props.onClose}  
                        className="icon"  
                        size={32}
                    />
                </Container>
            }
        </ContainerModal>
    )
}

