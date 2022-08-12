import Alert from "@mui/material/Alert/Alert"
import { ContainerModal } from "./modalErroSucessoStyle"

export const ModalErroSucesso = ()=>{
    return(
        <ContainerModal>
            <Alert severity="error" className="m">This is an error alert — check it out!</Alert>
        </ContainerModal>
    )
}