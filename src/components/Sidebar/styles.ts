import styled from 'styled-components';

export const Container = styled.div`
  .navbar {
    width: 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(#ff5733, #900c3f);
    position: fixed;
    top: 0px;
    left: 0px;
    border-radius: 0px;
    height: 100%;
    padding: 2rem;

    .menu-bars {
      font-size: 2rem;
      color: #FFF;
    }
    
    @media (max-width: 540px) {
      width: 4rem;
    }
  }
`;