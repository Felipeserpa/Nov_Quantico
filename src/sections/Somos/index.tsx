import Loading from '../../components/Loading';
import Container from './styles';

export default function About() {
  return (
    <Container>
      <section id="about" className="section-blue">
        <div className="container">
          <h1 className="section-title text-white">Quem Somos</h1>
          <div className="section-container">
            <article>
              <p>Olá,Somos a Quantico Sinalização.</p>
              <p>
                A Stechnology é uma empresa apaixonada por tecnologia e focada
                em transformar ideias em soluções digitais inovadoras. Desde o
                início de nossas atividades, em 2022, nos dedicamos a criar
                sites, sistemas web e aplicativos mobile que impulsionam os
                negócios de nossos clientes. Com uma equipe experiente e
                multidisciplinar, oferecemos soluções personalizadas e de alta
                qualidade, sempre alinhadas às necessidades e objetivos de cada
                cliente. Nossa missão é simplificar a vida das pessoas através
                da tecnologia, proporcionando experiências digitais intuitivas e
                eficientes.
              </p>
              <p>Nossos serviços:</p>
              <li>Desenvolvimento de sites personalizados</li>
              <li>Criação de sistemas web sob medida;</li>
              <li>Desenvolvimento de aplicativos mobile para iOS e Android;</li>
              <li>Manutenção e suporte técnico.</li>
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
