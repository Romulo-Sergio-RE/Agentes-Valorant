import { GridCards } from "../../components/grid";
import { Header } from "../../components/header";
import { Container } from "./favoritosStyle";

export const AgentesFavoritos = ()=>{

    return(
        <div>
            <Header tituloBnt="Voltar"/>
            <GridCards gridPage="favoritos"/>
        </div>
    )
}