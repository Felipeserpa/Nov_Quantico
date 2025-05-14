import { useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import adesivo1 from '../../assets/images/adesivo vinil/adeisvo02.jpg';
import adesivo2 from '../../assets/images/adesivo vinil/adesivo01.jpg';
import adesivo3 from '../../assets/images/adesivo vinil/adesivo03.jpg';
import adesivo4 from '../../assets/images/adesivo vinil/adesivo04.jpg';
import adesivo5 from '../../assets/images/adesivo vinil/adesivo05.jpg';
//import adesivo6 from '../../assets/images/adesivo vinil/foto06.jpg';
import adesivo7 from '../../assets/images/adesivo vinil/foto07.jpg';
import adesivo8 from '../../assets/images/adesivo vinil/foto08.jpg';
import adesivo9 from '../../assets/images/adesivo vinil/foto09.jpg';
import adesivo10 from '../../assets/images/adesivo vinil/foto10.webp';
import adesivo11 from '../../assets/images/adesivo vinil/foto11.webp';
import adesivo12 from '../../assets/images/adesivo vinil/foto12.webp';

import adesivo13 from '../../assets/images/adesivo vinil/adesivo ons 1.jpg';
import adesivo14 from '../../assets/images/adesivo vinil/adesivo onss 2.jpg';
import adesivo15 from '../../assets/images/adesivo vinil/adesivo ons.jpg';
import adesivo16 from '../../assets/images/adesivo vinil/adesivo ons 3.jpg';

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
import fachada04 from '../../assets/images/fachadas/fachada22.jpg';
import fachada05 from '../../assets/images/fachadas/fachada.jpg';

//Placa de obras
import placadeobras01 from '../../assets/images/placa de obra/placa de obra fotoluminescente.jpg';
import placadeobras02 from '../../assets/images/placa de obra/placa de obra piatec..jpg';
import placadeobras03 from '../../assets/images/placa de obra/placa de obras.jpg';
import placadeobras04 from '../../assets/images/placa de obra/placa de sinalização.jpg';
import placadeobras05 from '../../assets/images/placa de obra/placa sinalização332.jpg';
import placadeobras06 from '../../assets/images/placa de obra/placa sinalização.jpg';
import placadeobras07 from '../../assets/images/placa de obra/placa sinalização2.jpg';
import placadeobra09 from '../../assets/images/placa de obra/placa sinalização22.jpg';

//Placa
import placa01 from '../../assets/images/placas/placa01.jpg';
import placa02 from '../../assets/images/placas/placa02.jpeg';
import placa03 from '../../assets/images/placas/placa03.jpeg';
import placa04 from '../../assets/images/placas/placa04.jpeg';
import placa05 from '../../assets/images/placas/placa05.jpg';
import placa06 from '../../assets/images/placas/placa06.jpg';
import placa07 from '../../assets/images/placas/placa07.jpg';
import placa08 from '../../assets/images/placas/placa08.jpg';
import placa09 from '../../assets/images/placas/placa09.jpg';
import placa10 from '../../assets/images/placas/placa10.jpg';

//Letreiros.
import letreiro1 from '../../assets/images/letreiros/letreiro01.jpg';
import letreiro2 from '../../assets/images/letreiros/letreiro suzano.jpg';
import letreiro3 from '../../assets/images/letreiros/letreiro03.jpg';
import letreiro4 from '../../assets/images/letreiros/accenture 03.jpeg';
import letreiro6 from '../../assets/images/letreiros/accenture01.jpg';
import letreiro7 from '../../assets/images/letreiros/accenture02.jpg';
import letreiro8 from '../../assets/images/letreiros/foto 02.jpg';
import letreiro9 from '../../assets/images/letreiros/foto 03.jpeg';
import letreiro10 from '../../assets/images/letreiros/letreiro accenture.jpg';
import letreiro11 from '../../assets/images/letreiros/letreiro.jpg';
import letreiro12 from '../../assets/images/letreiros/letreiro sapore.jpg';

//Veiculos
import veiculos01 from '../../assets/images/veiculos/veiculos01.jpeg';
import veiculos02 from '../../assets/images/veiculos/veiculos02.jpeg';
import veiculos03 from '../../assets/images/veiculos/veiculos03.jpeg';
import veiculos04 from '../../assets/images/veiculos/veiculos04.jpg';
import veiculos05 from '../../assets/images/veiculos/veiculos05.jpg';
import veiculos06 from '../../assets/images/veiculos/veiculos06.jpg';

//Stande
import stande01 from '../../assets/images/stande/stande01.jpg';
import stande02 from '../../assets/images/stande/stande02.jpg';
import stande03 from '../../assets/images/stande/stande03.jpg';
import stande04 from '../../assets/images/stande/stande04.jpg';
import stande05 from '../../assets/images/stande/stander globo malhas.webp';
import stande06 from '../../assets/images/stande/stander.webp';

//quadros
//import quadro01 from '../../assets/images/quadros/quadro01.jpg';
import quadro02 from '../../assets/images/quadros/quadro02.jpg';
import quadro03 from '../../assets/images/quadros/quadro03.jpg';
import quadro04 from '../../assets/images/quadros/quadro0.jpg';

const servicos = [
  { nome: 'Totens', fotos: [totens02, totens03, totens04, totens05, totens01] },
  {
    nome: 'Quadros',
    fotos: [quadro02, quadro03, quadro04],
  },
  {
    nome: 'Banners',
    fotos: [
      banner01,
      banner02,
      banner03,
      placa04,
      placa05,
      placa06,
      placa07,
      placa09,
    ],
  },
  {
    nome: 'Placas',
    fotos: [
      placa01,
      placa02,
      placa03,
      placa04,
      placa05,
      placa06,
      placa07,
      placa08,
      placa09,
      placa10,
    ],
  },
  {
    nome: 'Fachadas',
    fotos: [fachadas01, fachadas02, fachadas03, fachada04, fachada05],
  },
  {
    nome: 'Placas de obras',
    fotos: [
      placadeobras01,
      placadeobras02,
      placadeobras03,
      placadeobras04,
      placadeobras05,
      placadeobras06,
      placadeobras07,
      placadeobra09,
    ],
  },
  {
    nome: 'Letreiros',
    fotos: [
      letreiro1,
      letreiro2,
      letreiro3,
      letreiro6,
      letreiro11,
      letreiro7,
      letreiro10,
      letreiro4,
      letreiro8,
      letreiro9,

      letreiro12,
    ],
  },
  {
    nome: 'Veiculos',
    fotos: [
      veiculos01,
      veiculos02,
      veiculos03,
      veiculos04,
      veiculos05,
      veiculos06,
    ],
  },
  {
    nome: 'Stander',
    fotos: [stande01, stande02, stande03, stande04, stande05, stande06],
  },
  {
    nome: 'Adesivo Vinil',
    fotos: [
      adesivo1,
      adesivo2,
      adesivo3,
      adesivo4,
      adesivo5,
      adesivo7,
      adesivo8,
      adesivo9,
      adesivo10,
      adesivo11,
      adesivo12,
      adesivo13,
      adesivo14,
      adesivo15,
      adesivo16,
    ],
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
