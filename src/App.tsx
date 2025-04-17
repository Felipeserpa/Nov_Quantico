// src/App.tsx
import { ThemeProvider } from 'styled-components';
import { Toaster } from 'react-hot-toast';
import { Routes, Route } from 'react-router-dom';

import GlobalStyles from './assets/styles/GlobalStyles';
import theme from './assets/styles/theme';

import MainLayout from './components/MainLayout/MainLayout';
import Home from '../src/sections/home';
import Servicos from '../src/sections/servicos/servicos';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Toaster position="bottom-right" />
      <GlobalStyles />

      <Routes>
        {/* Layout padrão com header/footer */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>

        {/* Página separada sem layout */}
        <Route path="/servicos" element={<Servicos />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
