import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AgentesFavoritos } from "../pages/favoritosPage";
import { HomePage } from "../pages/homePage";

export const Rotas = ({ children }: any)=>{
    return(
        <BrowserRouter>
            { children }
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/favoritos" element={<AgentesFavoritos />}/>
            </Routes>
        </BrowserRouter>
    );
}