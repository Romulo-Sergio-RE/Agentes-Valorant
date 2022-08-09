import { Header } from "../../components/header"
import { InputPesquisa } from "../../components/inputPesquisa"
import { Container } from "./homePageStyle"

export const HomePage=()=>{
    return(
        <div>
            <Header tituloBnt="Meus Favoritos"/>
            <InputPesquisa />
        </div>
    )
}