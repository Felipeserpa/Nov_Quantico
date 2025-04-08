import styled from 'styled-components';

const Container = styled.div`
  .header {
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 2rem 0;
    z-index: 2;
    transition: 0.3s ease-in-out;
    background-color: rgb(250, 254, 255);

    &.active {
      background-color: rgb(250, 254, 255);
      border-bottom: 1px solid #9c5000;
      backdrop-filter: blur(0.8rem);
      padding: 1rem;
      @media (max-width: 930px) {
        padding: 0.5rem 0;
      }
    }
  }

  nav {
    max-width: 1200px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    z-index: 2;
    transition: all 0.3s ease-in-out;
    @media (max-width: 920px) {
      position: relative;
      display: flex;
      justify-content: space-between;
      padding: 2rem;
    }
  }

  .nav-menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 70%;
    @media (max-width: 920px) {
      position: fixed;
      right: -100%;
      top: 0;
      padding: 30px 0 86px;
      flex-direction: column;
      background-color: #012333;
      width: 100%;
      text-align: center;
      opacity: 0.8;
      transition: 0.4s;
      z-index: 2;
    }
  }

  nav ul {
    list-style: none;
    font-size: 1.7rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  nav ul a {
    color: ${(props) => props.theme.secondaryColor};
    padding: 1rem 1.5rem;
    transition: 0.4s;
  }

  nav ul a:hover {
    color: ${(props) => props.theme.secondaryColorHover};
  }

  .hamburger {
    display: none;
    @media (max-width: 930px) {
      display: block;
      position: absolute;
      right: 30px;
      z-index: 2;
    }
  }

  .bar {
    display: block;
    width: 30px;
    height: 4px;
    margin: 6px auto;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: #9c5000;
  }

  .bar:nth-child(2) {
    width: 20px;
    right: 1px;
  }

  @media (max-width: 930px) {
    #logo {
      display: block;
      position: absolute;
      left: 20px;
    }

    .hamburger.active .bar:nth-child(2) {
      opacity: 0;
    }
    .hamburger.active .bar:nth-child(1) {
      transform: translateY(10px) rotate(-45deg);
    }

    .hamburger.active .bar:nth-child(3) {
      transform: translateY(-10px) rotate(45deg);
    }

    .nav-menu.active {
      opacity: 1;
      right: 0;
    }

    .nav-menu ul {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin: 70px 0 50px 0;
      font-size: 3rem;
    }
  }
`;

export default Container;
