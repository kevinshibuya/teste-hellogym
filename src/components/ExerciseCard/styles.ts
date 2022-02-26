import styled from 'styled-components';

export const Container = styled.button`
  min-width: 10rem;
  height: 12rem;
  text-align: center;
  background: #fff;
  -webkit-box-shadow: 0px 0px 10px 3px rgba(0,0,0,0.1); 
  box-shadow: 0px 0px 10px 3px rgba(0,0,0,0.1);

  img {
    width: 100%;
    height: 7rem;
  }

  h1 {
    font-size: 1rem;
    padding: 1rem;
    font-weight: 600;
    margin-top: -6px;
  }

  p {
    background: linear-gradient(-90deg, #ff5733, #900c3f);
    color: #fff;
    font-weight: 800;
    padding: 0.21rem;
  }
`;