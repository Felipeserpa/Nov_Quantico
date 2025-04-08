import styled from 'styled-components';

const Container = styled.div`
  #skills-container {
    max-width: 1100px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    padding-bottom: 3rem;
    @media (max-width: 930px) {
      gap: 2rem;
    }
  }

  #skills-container .skill-card {
    border: 1px solid ${(props) => props.theme.primaryColor};
    width: 22rem;
    padding: 1rem 0;
    text-align: center;
    transition: 0.5s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
    @media (max-width: 930px) {
      width: 16rem;
    }
  }

  #skills-container .skill-card h2 {
    color: aliceblue;
    font-size: 2rem;
    font-weight: 500;
    padding-bottom: 1rem;
    @media (max-width: 930px) {
      font-size: 1.5rem;
    }
  }

  #skills-container .icon {
    font-size: 9rem;
    color: ${(props) => props.theme.secondaryColor};

    @media (max-width: 930px) {
      font-size: 6rem;
    }
  }
`;

export default Container;
