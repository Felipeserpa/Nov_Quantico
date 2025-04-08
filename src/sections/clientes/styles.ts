import styled from 'styled-components';

const Container = styled.div`
  .card {
    display: flex;
    height: 32rem;
    margin: 0 1rem 3rem 1rem;
    background-image: ${(props) => props.theme.linearGradient};
    transition: 0.6s ease-in-out;
    justify-content: space-between;
    @media (max-width: 930px) {
      margin: 0 1rem 2rem 1rem;
      flex-direction: column;
      height: max-content;
    }
  }
  .image-container {
    display: flex;
    flex-wrap: nowrap; /* Impede que as imagens quebrem linha */
    overflow-x: auto; /* Ativa scroll horizontal se precisar */
    gap: 1rem; /* Espaço entre as imagens */
    padding: 1rem;
    scroll-behavior: smooth; /* Scroll suave */
  }

  .image-container img {
    flex-shrink: 0;
    width: 310px; /* Aumentei a largura */
    height: 230px; /* Altura definida */
    border-radius: 12px;
    object-fit: cover; /* Garante que a imagem preencha sem distorcer */
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }
  .card-description {
    display: flex;
    justify-items: start;
    align-items: start;
    justify-content: start;
    height: 100%;
    width: 100%;
    flex-direction: column;
    padding: 2rem;
  }

  .card-image {
    padding: 8cqb;
    width: 100%;
    height: 100%;
  }
  #img {
    width: 376px;
  }
  #img1 {
    width: 200px;
  }

  .card:hover {
    transform: scale(1.02);
    background-color: ${(props) => props.theme.transparent};
  }
`;

export default Container;
