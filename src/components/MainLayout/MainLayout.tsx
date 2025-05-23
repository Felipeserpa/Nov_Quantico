// src/layouts/MainLayout.tsx
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <>
      <Header />
      <Outlet /> {/* Renderiza as rotas-filhas aqui */}
      <Footer />
    </>
  );
}
