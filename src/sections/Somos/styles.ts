import styled from 'styled-components';

const Container = styled.div`
  #about .section-container {
    display: flex;
    align-items: center;
    margin-bottom: 10rem;
    padding: 3rem;
  }

  #about article {
    padding-right: 3rem;
  }

  #about article p {
    font-size: 2rem;
    color: ${(props) => props.theme.aliceBlue};
    line-height: 2.8rem;
    padding: 10px;
  }
  #about article li {
    font-size: 2rem;
    color: ${(props) => props.theme.aliceBlue};
    line-height: 2.8rem;
  }

  #about picture img {
    width: 200px;
    border-radius: 0.5rem;
  }

  @media (max-width: 978px) {
    #about article p {
      text-align: left;
    }
  }

  @media (max-width: 930px) {
    #about .section-container {
      flex-direction: column;
      padding: 0 3rem;
      gap: 4rem;
    }

    #about article {
      padding: 0;
    }

    #about picture img {
      width: 34rem;
    }
  }
`;

export default Container;
