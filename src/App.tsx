import { ThemeProvider } from 'styled-components';
import { Toaster } from 'react-hot-toast';
import About from './sections/Somos';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
//import Portfolio from './sections/clientes';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import GlobalStyles from './assets/styles/GlobalStyles';
import theme from './assets/styles/theme';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Analytics />
      <Toaster position="bottom-right" font-size="1 rem" />
      <GlobalStyles />
      <Header />
      <Hero />
      <About />
      <Skills />

      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
