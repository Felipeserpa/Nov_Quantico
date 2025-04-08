import { FaJs, FaGitAlt, FaReact, FaNodeJs } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import {
  SiFigma,
  SiMongodb,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiFirebase,
  SiPostgresql,
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { GrMysql } from 'react-icons/gr';
import Container from './styles';

export default function Skills() {
  return (
    <Container>
      <section id="skills" className="section-blue">
        <div className="container">
          <h1 className="section-title text-white">Serviços</h1>
          <div className="section-container">
            <div id="skills-container" data-aos="fade-up">
              <div className="skill-card">
                <h2>Criação de Identidade visual</h2>
                <p>
                  Transformamos a essência da sua marca em uma linguagem visual
                  única e memorável. Do logotipo à paleta de cores, criamos uma
                  identidade que conecta e destaca seu negócio no mercado.
                </p>
                <a href="/servico-identidade-visual" className="button">
                  Saiba Mais
                </a>
              </div>
              <div className="skill-card">
                <h2>Fachadas comercial</h2>
                <p>
                  Projetamos fachadas que atraem e impressionam, criando um
                  ponto de contato visual impactante para o seu negócio.
                  Utilizamos materiais de alta qualidade e designs inovadores
                  para garantir que sua fachada se destaque.
                </p>
                <a href="/servico-identidade-visual" className="button">
                  Saiba Mais
                </a>
              </div>
              <div className="skill-card">
                <h2>Placas e Totens Publicitários</h2>
                <p>
                  Desenvolvemos placas e totens publicitários que comunicam sua
                  mensagem de forma clara e eficaz. Nossas soluções são
                  personalizadas para maximizar a visibilidade da sua marca em
                  qualquer ambiente.
                </p>
                <a href="/servico-identidade-visual" className="button">
                  Saiba Mais
                </a>
              </div>
              <div className="skill-card">
                <h2>Adesivação de Ambiente e Veiculos</h2>
                <p>
                  Transforme seus espaços e veículos em poderosas ferramentas de
                  marketing. Oferecemos soluções de adesivação que combinam
                  design criativo e materiais duráveis, garantindo um impacto
                  visual duradouro.
                </p>
                <a href="/servico-identidade-visual" className="button">
                  Saiba Mais
                </a>
              </div>
              <div className="skill-card">
                <h2>Sinalização Interna e Externa</h2>
                <p>
                  Criamos sistemas de sinalização que guiam, informam e
                  organizam, melhorando a experiência do usuário em qualquer
                  ambiente. Nossas soluções são projetadas para atender às
                  necessidades específicas do seu negócio.
                </p>
                <a href="/servico-identidade-visual" className="button">
                  Saiba Mais
                </a>
              </div>
              <div className="skill-card">
                <h2>Custom designs</h2>
                <p>
                  Desenvolvemos projetos personalizados que refletem a
                  individualidade da sua marca. Do conceito à execução, nossa
                  equipe trabalha para criar soluções únicas que superam suas
                  expectativas.
                </p>
                <a href="/servico-identidade-visual" className="button">
                  Saiba Mais
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
