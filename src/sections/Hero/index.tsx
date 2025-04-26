import { Link } from 'react-router-dom';
import Container from './styles';
import { FaWhatsapp } from 'react-icons/fa';

export default function Presentation() {
  return (
    <Container>
      <div className="presentation container" id="inicio">
        <div>
          <h1>
            Olá,
            <span />
          </h1>
          <h1>
            somos a <span />
          </h1>
          <h1>
            Quantico Sinalização
            <span />
          </h1>
        </div>
      </div>
    </Container>
  );
}
