import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
`;

export const Title = styled.h1`
  font-size: 104px;
`;

export const Informacoes = styled.div`
  margin-top: 30px;

  width: 500px;
  height: 600px;

  border-radius: 15px;
  background-color: #354b3d;

  border: 2px solid #f6f6f6;

  div {
    text-align: center;

    img {
      width: 250px;
      height: 250px;

      border: 2px solid #f6f6f6;
    }

    h1 {
      margin-top: 12px;
    }

    div {
      margin-top: 35px;

      a {
        color: #354b3d;
        text-decoration: none;
        padding: 10px;

        background-color: #f6f6f6;
        border-radius: 15px;
      }
    }
  }
`;
