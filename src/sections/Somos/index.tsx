import Loading from '../../components/Loading';
import Container from './styles';

export default function About() {
  return (
    <Container>
      <section id="about" className="section-grey">
        <div className="container">
          <h1 className="section-title text-blue">Quem Somos</h1>
          <div className="section-container text-blue">
            <article>
              <p className="text-blue">Olá,Somos a Quantico Sinalização.</p>
              <p className="text-blue">
                A Quantico Sinalização é uma empresa dedicada à excelência em
                fornecer soluções de sinalização para empresas e organizações de
                todos os tamanhos. Nosso compromisso é criar um impacto positivo
                por meio de uma sinalização eficaz e designs inovadores.
              </p>

              <p className="text-blue">
                <strong> Nossos Valores:</strong>
                Comprometimento com a qualidade, inovação, atendimento ao
                cliente excepcional e integridade em todas as interações.
              </p>
              <p className="text-blue">
                Pronto para elevar a comunicação visual da sua empresa? Entre em
                contato com a Quantico Sinalização e descubra como podemos
                ajudá-lo a criar um impacto duradouro.
              </p>
            </article>
            <picture data-aos="fade-up">
              /<img src="logo.png" alt="avatar.webp" />
            </picture>
          </div>
        </div>
      </section>
    </Container>
  );
}
