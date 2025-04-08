/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useLayoutEffect, useState } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
} from 'react-icons/fa';
import Container from './styles';

export default function Header() {
  const [active, setMode] = useState(false);
  const toggleMode = () => {
    setMode(!active);
  };

  useLayoutEffect(() => {
    if (active) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [active]);

  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY > 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <Container>
      <header className={navbar ? 'header active' : 'header'}>
        <nav>
          <div id="logo">
            <a href="/">
              <img
                src="/logo.png"
                alt=""
                style={{ width: 140, border: 'radius' }}
              />
            </a>
          </div>
          <div className={active ? 'nav-menu  active' : 'nav-menu '}>
            <ul
              onClick={() => {
                setMode(false);
              }}
            >
              <li>
                <a href="#inicio">HOME</a>
              </li>
              <li>
                <a href="#skills">SERVIÇOS</a>
              </li>

              <li>
                <a href="#about">SOBRE</a>
              </li>
              <li>
                <a href="#contact">CONTATO</a>
              </li>
            </ul>

            <div
              className="social-links"
              onClick={() => {
                setMode(false);
              }}
            >
              <a
                href=" https://wa.me/5581995773197?text=Olá%2C%20gostaria%20de%20fazer%20um%20orçamento!"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp />
              </a>

              <a href=" " target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>

              <a href="mailto:" target="_blank" rel="noreferrer">
                <FaEnvelope />
              </a>
            </div>
          </div>
          <div
            className={active ? 'hamburger active' : 'hamburger'}
            id="one"
            onClick={toggleMode}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </div>
        </nav>
      </header>
    </Container>
  );
}
