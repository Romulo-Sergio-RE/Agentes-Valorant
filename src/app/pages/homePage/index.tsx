import { Header } from "../../components/header"
import { Modal } from "../../components/modal"
import { Container } from "./homePageStyle"

export const HomePage=()=>{
    return(
        <div>
            <Header tituloBnt="Meus Favoritos"/>
            <Modal />
        </div>
    )
}