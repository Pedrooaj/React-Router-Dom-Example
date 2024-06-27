import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./Paginas/Inicio";
import Sobre from "./Paginas/Sobre";
import Menu from "./Componentes/Menu";
import Rodape from "Componentes/Rodape";
import PaginaPadrao from "Componentes/Pagina-padrao";
import Post from "Paginas/Post";
import NaoEncontrada from "Paginas/Nao-Encontrada";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="Sobre" element={<Sobre />} />
        </Route>
        <Route path="Posts/:id" element={<Post />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  )
}
export default AppRoutes;