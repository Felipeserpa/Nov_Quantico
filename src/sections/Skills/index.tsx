import Container from './styles';
import ImageSlider from '../../components/ImageSlide/ImageSlider';

import letreiro1 from '../../assets/images/letreiros/letreiro01.jpg';
import letreiro2 from '../../assets/images/letreiros/letreiro suzano.jpg';
import acenture from '../../assets/images/letreiros/accenture01.jpg';

import adesivo1 from '../../assets/images/adesivo vinil/adeisvo02.jpg';
import adesivo2 from '../../assets/images/adesivo vinil/adesivo01.jpg';
import adesivo3 from '../../assets/images/adesivo vinil/adesivo03.jpg';

import veiculos01 from '../../assets/images/veiculos/veiculos01.jpeg';
import veiculos02 from '../../assets/images/veiculos/veiculos02.jpeg';

import placa01 from '../../assets/images/placa de obra/placa de obra fotoluminescente.jpg';
import placa02 from '../../assets/images/placa de obra/placa de obra piatec..jpg';
import placa03 from '../../assets/images/placa de obra/placa de obras.jpg';

import placas01 from '../../assets/images/placas/placa01.jpg';
import placas02 from '../../assets/images/placas/placa02.jpeg';
import placas03 from '../../assets/images/placas/placa03.jpeg';
import placas05 from '../../assets/images/placas/placa05.jpg';

import fachadas01 from '../../assets/images/fachadas/fachda01.jpg';
import fachadas02 from '../../assets/images/fachadas/fachada02.jpeg';
import fachadas03 from '../../assets/images/fachadas/fachda03.jpeg';
import fachadas04 from '../../assets/images/fachadas/fachada04.jpg';
import { Link } from 'react-router-dom';

export default function Skills() {
  const servicos = [
    {
      titulo: 'Letreiros',
      descricao:
        'Letreiros são formas de comunicação visual que utilizam letras, números e símbolos para identificar um estabelecimento, marca ou serviço. Eles podem ser instalados em fachadas, interiores de edifícios, ou como estruturas independentes. O objetivo principal é atrair a atenção e informar sobre o local ou negócio.',
      link: '/servico-identidade-visual',
      imagens: [
        acenture,
        letreiro1, // Use as variáveis importadas aqui
        letreiro2,
      ],
    },
    {
      titulo: 'Adesivos',
      descricao:
        'Adesivos são materiais gráficos com uma camada autoadesiva em um dos lados, permitindo sua fixação em diversas superfícies. São utilizados para comunicação visual em fachadas, veículos, vitrines, paredes internas, e outros.',
      link: '/servico-adesivos',
      imagens: [
        // Array de imagens para Adesivos
        adesivo1,
        adesivo3,
        adesivo2,
      ],
    },
    {
      titulo: 'Veiculos',
      descricao:
        'A adesivação veicular transforma carros, vans, caminhões e outros veículos em mídias móveis, exibindo a marca, produtos, serviços e informações de contato da empresa.',
      link: '/servico-veiculos',
      imagens: [
        // Array de imagens para Veiculos
        veiculos01,
        veiculos02,
      ],
    },
    {
      titulo: 'Placas de obras',
      descricao:
        'Placas de obras são utilizadas para identificar projetos de construção, reformas ou demolições. Elas geralmente contêm informações sobre a obra (nome, tipo, localização), os responsáveis técnicos (engenheiros, arquitetos), a empresa executora, prazos e, em alguns casos, representações visuais do projeto',
      link: '/servico-placas-obras',
      imagens: [placa01, placa02, placa03],
    },
    {
      titulo: 'Placas',
      descricao:
        'Este é um termo genérico que engloba diversos tipos de placas com diferentes finalidades, como sinalização interna (direcional, informativa, de segurança), sinalização externa (comercial, institucional), placas de identificação, etc.',
      link: '/servico-placas',
      imagens: [placas03, placas01, placas02, placas05],
    },
    {
      titulo: 'Fachadas',
      descricao:
        'Fachadas são a parte frontal de um edifício ou estabelecimento comercial, desempenhando um papel crucial na primeira impressão que o negócio causa. A sinalização de fachadas visa identificar, destacar e atrair clientes.',
      link: '/servico-fachadas',
      imagens: [fachadas01, fachadas02, fachadas03, fachadas04],
    },
  ];

  return (
    <Container>
      <section id="servicos" className="">
        <div className="container">
          <h1 className="section-title text-white">Serviços</h1>
          <div className="section-container">
            <div id="skills-container" data-aos="fade-up">
              {servicos.map((servico, index) => (
                <div
                  className="skill-card"
                  key={index}
                  style={{
                    width: '400px', // Defina uma largura fixa para o card
                    maxWidth: '100%', // Garante que não ultrapasse o contêiner em telas menores
                    marginBottom: '30px', // Adiciona um pouco de espaço entre os cards
                    border: '1px solid #ccc', // Exemplo de estilo visual
                    padding: '15px',
                    overflow: ' hidden',
                  }}
                >
                  <h2>{servico.titulo}</h2>
                  <ImageSlider images={servico.imagens} />
                  <p style={{ fontSize: '1.2em' }}>{servico.descricao}</p>{' '}
                  <Link to="/servicos" type="button" className="cta">
                    {/* Diminui a fonte da descrição */}
                    <a
                      href={servico.link}
                      className="button"
                      style={{ fontSize: '1.0em', padding: '8px 12px' }}
                    >
                      {' '}
                      {/* Diminui a fonte e o padding do botão */}
                      Saiba Mais
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
