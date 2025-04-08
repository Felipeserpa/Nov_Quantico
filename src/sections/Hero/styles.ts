import styled from 'styled-components';

const Container = styled.div`
  .presentation {
    height: 100vh;
    background-image: url(/onur-binay-_yC2htzMYnI-unsplash.webp);
    background-size: cover;
    background-position: top center;
    position: relative;
    z-index: 1;
    @media (max-width: 930px) {
      height: 90vh;
    }
  }

  .presentation::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: ${(props) => props.theme.black};
    opacity: 0.5;
    z-index: -1;
  }

  .presentation div {
    padding-top: 9.7rem;
    @media (max-width: 930px) {
      padding-top: 20px;
    }
  }

  .presentation h1 {
    display: block;
    width: fit-content;
    font-size: 5rem;
    position: relative;
    color: ${(props) => props.theme.transparent};
    animation: text_reveal 0.5 ease forwards;
    animation-delay: 1.5s;
  }

  .presentation h1:nth-child(1) {
    animation-delay: 1s;
  }

  .presentation h1:nth-child(2) {
    animation-delay: 2s;
  }

  .presentation h1:nth-child(3) {
    animation: text_reveal_name 0.1s ease forwards;
    animation-delay: 3s;
  }

  .presentation h1 span {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    animation: text_reveal_box 1s ease;
    animation-delay: 0.3s;
    background-color: #9c5000;
  }

  .presentation h1:nth-child(1) span {
    animation-delay: 0.5s;
  }

  .presentation h1:nth-child(2) span {
    animation-delay: 1.5s;
  }

  .presentation h1:nth-child(3) span {
    animation-delay: 2.5s;
  }

  .presentation button {
    display: inline-block;
    padding: 1rem 4.7rem;
    color: ${(props) => props.theme.secondaryColor};
    background-color: transparent;
    border: 0.2rem solid ${(props) => props.theme.secondaryColor};
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    margin-top: 2rem;
    transition: 0.6s;
    cursor: pointer;
  }

  .presentation button:hover {
    color: #01394e;
    font-weight: 700;
    background-color: ${(props) => props.theme.secondaryColor};
  }

  /* keyframes ============================================== */
  @keyframes text_reveal_name {
    100% {
      color: #9c5000;
    }
  }

  @keyframes text_reveal {
    100% {
      color: aliceblue;
    }
  }

  @keyframes text_reveal_box {
    50% {
      width: 100%;
      left: 0;
    }
    100% {
      width: 0;
      left: 100%;
    }
  }
`;

export default Container;
