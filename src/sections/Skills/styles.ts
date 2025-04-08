import styled from 'styled-components';

const Container = styled.div`
  #skills-container {
    max-width: 1100px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding-bottom: 1rem;
    @media (max-width: 930px) {
      grid-template-columns: 1fr;
    }
  }

  #skills-container .skill-card {
    border: 1px solid ${(props) => props.theme.primaryColor};
    padding: 1rem;
    text-align: center;
    transition: 0.5s ease-in-out;
    min-height: 400px;
    display: flex;
    flex-direction: column;
  }

  #skills-container .skill-card:hover {
    transform: scale(1.1);
  }

  #skills-container .skill-card h2 {
    color: aliceblue;
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 10px;
    color: ${(props) => props.theme.secondaryColor};
    @media (max-width: 930px) {
      font-size: 1.5rem;
      margin-bottom: 5px;
    }
  }

  #skills-container .skill-card p {
    padding: 0.5rem 1rem; /* Ajuste o padding vertical e horizontal */
    font-size: 16px; /* Aumenta o tamanho da fonte */
    color: aliceblue;
    margin-top: 20px; /* Ajusta a margem superior */
    flex-grow: 1;
    line-height: 1.6; /* Ajusta a altura da linha para melhor legibilidade */
    max-width: 400px; /* Limita a largura do parágrafo */
    margin-left: auto;
    margin-right: auto;
    text-align: center; /* Centraliza o texto */

    @media (max-width: 930px) {
      margin-top: 10px;
    }
  }

  .button {
    color: white;
    font-size: 14px;
    padding: 10px 20px;
    margin-top: 20px; /* Adiciona margem superior ao botão */
    cursor: pointer;
  }
`;

export default Container;
