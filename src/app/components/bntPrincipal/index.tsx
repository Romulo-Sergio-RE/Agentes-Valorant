import { Container } from "./bntPrincipal";

interface IBntPrincipalProps{
    onClickBnt:()=>void,
    children:any
}   

export const BntPrincipal:React.FC<IBntPrincipalProps> =(props)=>{
    return(
        <Container onClick={props.onClickBnt}>
           {props.children}
        </Container>
    )
}