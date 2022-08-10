import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AgentsProvider } from "../context/AgentsValorantContext";
import { AgentesFavoritos } from "../pages/favoritosPage";
import { HomePage } from "../pages/homePage";

export const Rotas = ({ children }: any)=>{
    return(
        <BrowserRouter>
            { children }
            <AgentsProvider>
                <Routes>
                    <Route path="/" element={<HomePage />}/>
                    <Route path="/favoritos" element={<AgentesFavoritos />}/>
                </Routes>
            </AgentsProvider>
        </BrowserRouter>
    );
}