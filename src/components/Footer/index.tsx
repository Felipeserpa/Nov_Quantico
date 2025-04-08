import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
} from 'react-icons/fa';
import Container from './styles';

export default function Footer() {
  return (
    <Container>
      <footer className="container section-blue">
        <div className="section-container">
          <p>Desenvolvido por @Stechnology</p>
          <div className="social-links">
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
      </footer>
    </Container>
  );
}
