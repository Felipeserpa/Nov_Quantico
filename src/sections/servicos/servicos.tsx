import { useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import adesivo1 from '../../assets/images/adesivo vinil/adeisvo02.jpg';
import adesivo2 from '../../assets/images/adesivo vinil/adesivo01.jpg';
import adesivo3 from '../../assets/images/adesivo vinil/adesivo03.jpg';
import adesivo4 from '../../assets/images/adesivo vinil/adesivo04.jpg';
import adesivo5 from '../../assets/images/adesivo vinil/adesivo05.jpg';
import adesivo6 from '../../assets/images/adesivo vinil/foto06.jpg';

//totens
import totens01 from '../../assets/images/totens/foto01.jpg';
import totens02 from '../../assets/images/totens/foto02.jpg';
import totens03 from '../../assets/images/totens/totens1.jpg';
import totens04 from '../../assets/images/totens/totens2.jpg';
import totens05 from '../../assets/images/totens/totens3.jpeg';

//Banner
import banner01 from '../../assets/images/banner/banner.jpg';
import banner02 from '../../assets/images/banner/banner2.jpg';
import banner03 from '../../assets/images/banner/banner3.jpg';

//fachadas
import fachadas01 from '../../assets/images/fachadas/fachda01.jpg';
import fachadas02 from '../../assets/images/fachadas/fachada02.jpeg';
import fachadas03 from '../../assets/images/fachadas/fachda03.jpeg';

//Placa de obras
import placadeobras01 from '../../assets/images/placa de obra/placa de obra fotoluminescente.jpg';
import placadeobras02 from '../../assets/images/placa de obra/placa de obra piatec..jpg';
import placadeobras03 from '../../assets/images/placa de obra/placa de obras.jpg';

const servicos = [
  { nome: 'Totens', fotos: [totens02, totens03, totens04, totens05, totens01] },
  { nome: 'Banners', fotos: [banner01, banner02, banner03] },
  { nome: 'Placas', fotos: ['/fotos/placas1.jpg', '/fotos/placas2.jpg'] },
  {
    nome: 'Fachadas',
    fotos: [fachadas01, fachadas02, fachadas03],
  },
  {
    nome: 'Placas de obras',
    fotos: [placadeobras01, placadeobras02, placadeobras03],
  },
  { nome: 'Letreiros', fotos: ['/fotos/letreiros1.jpg'] },
  { nome: 'Veiculos', fotos: ['/fotos/veiculos1.jpg'] },
  { nome: 'Stander', fotos: ['/fotos/stander1.jpg'] },
  {
    nome: 'Adesivo Vinil',
    fotos: [adesivo1, adesivo2, adesivo3, adesivo4, adesivo5, adesivo6],
  },
];

export default function Servicos() {
  const [servicoSelecionado, setServicoSelecionado] = useState(servicos[0]);

  return (
    <>
      <Header />
      <Container>
        <div className="conteudo">
          <div className="cards">
            {servicos.map((servico) => (
              <div
                key={servico.nome}
                className={`card ${
                  servico.nome === servicoSelecionado.nome ? 'ativo' : ''
                }`}
                onClick={() => setServicoSelecionado(servico)}
              >
                {servico.nome}
              </div>
            ))}
          </div>

          <div className="fotos">
            <h2 className="nome">{servicoSelecionado.nome}</h2>
            <div className="galeria">
              {servicoSelecionado.fotos.map((foto, index) => (
                <img key={index} src={foto} alt={servicoSelecionado.nome} />
              ))}
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 10rem 2rem 4rem;
  min-height: 100vh;

  .conteudo {
    display: flex;
    gap: 3rem;
    //max-width: 1200px;
    margin: 0 auto;
    align-items: flex-start;
    margin-top: 3rem; /* Espaço do Header */
    justify-content: flex-end;
  }
  .nome {
    color: white;
  }
  .cards {
    width: 35%;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    align-items: flex-end; /* Alinha os itens à direita */
  }

  .card {
    padding: 1.2rem 1.5rem;
    background: #eaeaea;
    border-left: 6px solid transparent;
    border-radius: 0.5rem;
    cursor: pointer;
    font-weight: bold;
    font-size: 1.2rem;
    text-align: left;
    transition: all 0.3s ease;
    width: 100%;
  }

  .card:hover {
    background: #ddd;
  }

  .card.ativo {
    background: #111;
    color: #fff;
    border-left: 6px solid #ffcc00;
  }

  .fotos {
    width: 80%;
  }

  .fotos h2 {
    font-size: 2.4rem;
    margin-bottom: 1.5rem;
  }

  .galeria {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }

  .galeria img {
    width: 300px;
    border-radius: 0.5rem;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    .conteudo {
      flex-direction: column;
    }

    .cards,
    .fotos {
      width: 100%;
    }

    .galeria img {
      width: 100%;
    }
  }
`;
