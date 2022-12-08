import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from 'componentes/Menu';
import FaseGrupos from 'pages/Fase-de-Grupos';
import NotFound from 'pages/NotFound';
import OitavasFinal from 'pages/Oitavas-de-Final';

export default function AppRouter() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route index element={<FaseGrupos />} />
        <Route path='oitavas-de-final' element={<OitavasFinal />} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </Router>
  )
}