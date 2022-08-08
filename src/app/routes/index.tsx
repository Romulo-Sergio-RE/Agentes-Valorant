import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/homePage";

export const Rotas = ({ children }: any)=>{
    return(
        <BrowserRouter>
            { children }
            <Routes>
                <Route path="/" element={<HomePage />}/>
            </Routes>
        </BrowserRouter>
    );
}