import { useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const servicos = [
  { nome: 'Totens', fotos: ['/fotos/totens1.jpg', '/fotos/totens2.jpg'] },
  { nome: 'Banners', fotos: ['/fotos/banners1.jpg', '/fotos/banners2.jpg'] },
  { nome: 'Placas', fotos: ['/fotos/placas1.jpg', '/fotos/placas2.jpg'] },
  { nome: 'Fachadas', fotos: ['/fotos/fachadas1.jpg'] },
  { nome: 'Placas de obras', fotos: ['/fotos/obras1.jpg'] },
  { nome: 'Letreiros', fotos: ['/fotos/letreiros1.jpg'] },
  { nome: 'Veiculos', fotos: ['/fotos/veiculos1.jpg'] },
  { nome: 'Stander', fotos: ['/fotos/stander1.jpg'] },
  { nome: 'Adesivo Vinil', fotos: ['/fotos/adesivo1.jpg'] },
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
            <h2>{servicoSelecionado.nome}</h2>
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
    max-width: 1200px;
    margin: 0 auto;
    align-items: flex-start;
    margin-top: 3rem; /* Espaço do Header */
  }

  .cards {
    width: 35%;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    align-items: flex-start;
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
    width: 75%;
  }

  .fotos h2 {
    font-size: 2.4rem;
    margin-bottom: 1.5rem;
  }

  .galeria {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
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
