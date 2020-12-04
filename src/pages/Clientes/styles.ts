import styled from 'styled-components';
import { shade } from 'polished';

import background from '../../assets/workspace.svg';

export const Container = styled.div`
  display: flex;

  width: 100vw;
  height: 100vh;

  background: url(${background}) no-repeat 72% center;
  background-size: 30%;

  @media (max-width: 1344px) {
    background-size: 20%;
  }

  @media (max-width: 1221px) {
    background: none;
  }
`;

export const Content = styled.div`
  margin-left: 15%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 64px;
`;

export const Cliente = styled.div`
  margin-top: 20px;

  width: 600px;
  height: 180px;

  border-radius: 20px;

  background-color: #354b3d;

  div {
    margin-top: 20px;
    text-align: center;

    h1 {
      font-size: 25px;
    }

    button {
      padding: 5px;
      margin-left: 15px;
    }
  }
`;

export const Next = styled.div`
  margin-top: 80px;
  flex-direction: column;
  display: flex;
  height: 35px;
  width: 250px;

  a {
    font-size: 20px;
    border-radius: 5px;
    padding: 10px;
    text-align: center;
    background: #f6f6f6;
    color: #5a7e67;

    &:hover {
      background: ${shade(0.2, '#5A7E67')};
    }

    & + a {
      margin-top: 15px;
    }
  }
`;
